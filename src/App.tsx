import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { questions } from './data';
import { supabase } from './lib/supabase';
import { checkGrammar } from './services/geminiService';
import { Difficulty, Banca, Question, GameState } from './types';

// Componentes Modularizados
import { Login } from './components/Login';
import { SelectionScreen } from './components/SelectionScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { QuizScreen } from './components/QuizScreen';
import { FeedbackScreen } from './components/FeedbackScreen';
import { ResultScreen } from './components/ResultScreen';

// Áudio Systems
const SOUND_URLS = {
  SELECT: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  CORRECT: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3',
  WRONG: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  ERROR: 'https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3'
};

export default function App() {
  // Áudio Instances
  const gameSounds = useMemo(() => {
    if (typeof window === 'undefined') return {} as Record<string, HTMLAudioElement>;
    const sounds: Record<string, HTMLAudioElement> = {};
    Object.entries(SOUND_URLS).forEach(([key, url]) => {
      const audio = new Audio(url);
      audio.volume = 0.4;
      audio.preload = 'auto';
      sounds[key] = audio;
    });
    return sounds;
  }, []);

  // Estados de Configuração e Jogo
  const [gameState, setGameState] = useState<GameState>('LOGIN');
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [dbStatus, setDbStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');
  
  // Estados de Simulação
  const [difficulty, setDifficulty] = useState<Difficulty>('Fácil');
  const [banca, setBanca] = useState<Banca>('Geral');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [quizSet, setQuizSet] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  // Estados de UI
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [selecting, setSelecting] = useState<any>(null);
  const [justification, setJustification] = useState("");
  const [grammarFeedback, setGrammarFeedback] = useState<string | null>(null);
  const [checkingGrammar, setCheckingGrammar] = useState(false);

  // Efeitos de Inicialização
  useEffect(() => {
    const checkConn = async () => {
      try {
        const { error } = await supabase.from('questions').select('id').limit(1);
        setDbStatus(error ? 'error' : 'connected');
      } catch {
        setDbStatus('error');
      }
    };
    checkConn();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Helpers de Áudio e Texto
  const playSound = useCallback((type: keyof typeof gameSounds) => {
    const s = gameSounds[type];
    if (s) {
      s.currentTime = 0;
      s.play().catch(() => {});
    }
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const feedbackText = useMemo(() => {
    if (isCorrect) return 'RESPOSTA CORRETA';
    if (selectedOption === '__TIMEOUT__') return 'TEMPO ESGOTADO';
    if (selectedOption === '__SKIPPED__') return 'QUESTÃO PULADA';
    return 'RESPOSTA ERRADA';
  }, [isCorrect, selectedOption]);

  const progress = useMemo(() => {
    return ((currentIdx + 1) / (quizSet.length || 1)) * 100;
  }, [currentIdx, quizSet.length]);

  // Lógica de Negócio
  const startQuiz = useCallback(async () => {
    setGameState('LOADING');
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      let data: Question[] = [];
      if (dbStatus === 'connected') {
        let query = supabase.from('questions').select('*').eq('difficulty', difficulty);
        if (banca !== 'Geral') query = query.eq('banca', banca);
        const { data: fetched } = await query;
        if (fetched && fetched.length > 0) data = fetched;
      }

      if (data.length === 0) {
        data = questions.filter(q => q.difficulty === difficulty);
        if (banca !== 'Geral') data = data.filter(q => q.banca === banca);
      }

      let pool = [...data].sort(() => Math.random() - 0.5);
      if (pool.length < questionCount) {
        const fallback = questions.filter(q => q.difficulty === difficulty).sort(() => Math.random() - 0.5);
        pool = Array.from(new Set([...pool, ...fallback]));
      }

      setQuizSet(pool.slice(0, questionCount));
      setCurrentIdx(0);
      setScore(0);
      setTimeLeft(120);
      setSelectedOption(null);
      setIsCorrect(null);
      setGameState('QUIZ');
    } catch (err) {
      setQuizSet(questions.slice(0, questionCount));
      setGameState('QUIZ');
    }
  }, [difficulty, banca, questionCount, dbStatus]);

  const handleLogin = (username: string) => {
    playSound('SELECT');
    setUser({ username });
    setGameState('SELECT_LEVEL');
  };

  const handleGrammarCheck = async () => {
    if (!justification.trim()) return;
    setCheckingGrammar(true);
    try {
      const feedback = await checkGrammar(justification);
      setGrammarFeedback(feedback);
    } catch {
      setGrammarFeedback("Erro na verificação.");
    } finally {
      setCheckingGrammar(false);
    }
  };

  const handleLevelSelect = (level: Difficulty) => {
    playSound('SELECT');
    setSelecting(level);
    setTimeout(() => {
      setDifficulty(level);
      setGameState('SELECT_BANCA');
      setSelecting(null);
    }, 300);
  };

  const handleBancaSelect = (b: Banca) => {
    playSound('SELECT');
    setSelecting(b);
    setTimeout(() => {
      setBanca(b);
      setGameState('SELECT_COUNT');
      setSelecting(null);
    }, 300);
  };

  const handleCountSelect = (count: number) => {
    playSound('SELECT');
    setQuestionCount(count);
    setGameState('WELCOME');
  };

  const handleAnswer = useCallback((option: string) => {
    if (selectedOption || gameState !== 'QUIZ') return;
    const currentQuestion = quizSet[currentIdx];
    if (!currentQuestion) return;

    const correct = option === currentQuestion.answer;
    setSelectedOption(option);
    setIsCorrect(correct);
    if (correct) {
      playSound('CORRECT');
      setScore(s => s + 1);
    } else {
      playSound('WRONG');
    }
    setTimeout(() => setGameState('FEEDBACK'), 800);
  }, [selectedOption, gameState, quizSet, currentIdx, playSound]);

  const handleSkip = useCallback(() => {
    if (selectedOption) return;
    setSelectedOption('__SKIPPED__');
    setIsCorrect(false);
    playSound('SELECT');
    setGameState('FEEDBACK');
  }, [selectedOption, playSound]);

  const nextQuestion = useCallback(() => {
    setJustification("");
    setGrammarFeedback(null);
    if (currentIdx < quizSet.length - 1) {
      setCurrentIdx(i => i + 1);
      setTimeLeft(120);
      setSelectedOption(null);
      setIsCorrect(null);
      setGameState('QUIZ');
    } else {
      setGameState('RESULT');
    }
  }, [currentIdx, quizSet.length]);

  const resetSimulation = useCallback(() => {
    setJustification("");
    setGrammarFeedback(null);
    setQuizSet([]);
    setCurrentIdx(0);
    setScore(0);
    setGameState('SELECT_LEVEL');
    playSound('SELECT');
  }, [playSound]);

  useEffect(() => {
    let timer: number;
    if (gameState === 'QUIZ' && timeLeft > 0) {
      timer = window.setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'QUIZ') {
      handleAnswer('__TIMEOUT__');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'} font-sans ${isDarkMode ? 'text-slate-100' : 'text-slate-800'} flex items-center justify-center overflow-hidden transition-colors duration-300`}>
      <div className={`${isDarkMode ? 'bg-slate-950' : 'bg-white'} w-full max-w-lg h-full md:h-[95vh] md:max-h-[850px] flex flex-col relative overflow-hidden shadow-2xl transition-colors duration-300`}>
        
        {/* Progress Bar */}
        {(gameState === 'QUIZ' || gameState === 'FEEDBACK') && (
          <div className={`absolute top-0 left-0 w-full h-1 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} z-50`}>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          {gameState === 'LOGIN' && (
            <Login 
              isDarkMode={isDarkMode} 
              setIsDarkMode={setIsDarkMode} 
              onLogin={handleLogin} 
              playSound={playSound}
            />
          )}

          {gameState === 'SELECT_LEVEL' && (
            <SelectionScreen 
              type="LEVEL" 
              isDarkMode={isDarkMode} 
              onSelect={handleLevelSelect} 
              selecting={selecting} 
              playSound={playSound}
            />
          )}

          {gameState === 'SELECT_BANCA' && (
            <SelectionScreen 
              type="BANCA" 
              isDarkMode={isDarkMode} 
              onSelect={handleBancaSelect} 
              onBack={() => setGameState('SELECT_LEVEL')}
              selecting={selecting} 
              playSound={playSound}
            />
          )}

          {gameState === 'SELECT_COUNT' && (
            <SelectionScreen 
              type="COUNT" 
              isDarkMode={isDarkMode} 
              onSelect={handleCountSelect} 
              onBack={() => setGameState('SELECT_BANCA')}
              selecting={selecting} 
              playSound={playSound}
            />
          )}

          {gameState === 'WELCOME' && (
            <WelcomeScreen 
              isDarkMode={isDarkMode} 
              questionCount={questionCount} 
              banca={banca} 
              difficulty={difficulty} 
              onConfirm={() => startQuiz()}
            />
          )}

          {gameState === 'LOADING' && (
            <LoadingScreen isDarkMode={isDarkMode} />
          )}

          {gameState === 'QUIZ' && quizSet[currentIdx] && (
            <QuizScreen 
              isDarkMode={isDarkMode}
              difficulty={difficulty}
              currentIdx={currentIdx}
              totalQuestions={quizSet.length}
              timeLeft={timeLeft}
              formatTime={formatTime}
              question={quizSet[currentIdx]}
              selectedOption={selectedOption}
              onAnswer={handleAnswer}
              onSkip={handleSkip}
            />
          )}

          {gameState === 'FEEDBACK' && quizSet[currentIdx] && (
            <FeedbackScreen 
              isDarkMode={isDarkMode}
              isCorrect={isCorrect}
              selectedOption={selectedOption}
              feedbackText={feedbackText}
              question={quizSet[currentIdx]}
              justification={justification}
              setJustification={setJustification}
              grammarFeedback={grammarFeedback}
              setGrammarFeedback={setGrammarFeedback}
              checkingGrammar={checkingGrammar}
              onGrammarCheck={handleGrammarCheck}
              onNext={nextQuestion}
            />
          )}

          {gameState === 'RESULT' && (
            <ResultScreen 
              isDarkMode={isDarkMode}
              score={score}
              total={quizSet.length}
              onReset={resetSimulation}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
