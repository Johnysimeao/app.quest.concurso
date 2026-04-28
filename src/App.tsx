import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw,
  Info,
  ChevronRight,
  BrainCircuit,
  MessageSquareQuote
} from 'lucide-react';
import { questions, Question, Difficulty, Banca } from './data';
import { supabase } from './lib/supabase';

type GameState = 'SELECT_LEVEL' | 'SELECT_BANCA' | 'SELECT_COUNT' | 'LOADING' | 'QUIZ' | 'FEEDBACK' | 'RESULT';

// Pre-instanciando os áudios fora do componente para evitar delay e re-alocação
const gameSounds: Record<string, HTMLAudioElement> = {
  SELECT: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'),
  CORRECT: new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'),
  WRONG: new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3')
};

// Configuração inicial de volume
Object.values(gameSounds).forEach(audio => {
  audio.volume = 0.4;
  audio.preload = 'auto';
});

export default function App() {
  const [gameState, setGameState] = useState<GameState>('SELECT_LEVEL');
  const [dbStatus, setDbStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function checkConnection() {
      try {
        const { error } = await supabase.from('questions').select('id').limit(1);
        if (error) throw error;
        setDbStatus('connected');
      } catch (err) {
        setDbStatus('error');
      }
    }
    checkConnection();
  }, []);

  const [difficulty, setDifficulty] = useState<Difficulty>('Fácil');
  const [banca, setBanca] = useState<Banca>('Geral');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [quizSet, setQuizSet] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const feedbackText = useMemo(() => {
    if (isCorrect) return 'RESPOSTA CORRETA';
    if (selectedOption === '__TIMEOUT__') return 'TEMPO ESGOTADO';
    return 'RESPOSTA ERRADA';
  }, [isCorrect, selectedOption]);

  const progress = useMemo(() => {
    return ((currentIdx + 1) / (quizSet.length || 1)) * 100;
  }, [currentIdx, quizSet.length]);

  const startQuiz = useCallback(async (countOverride?: number) => {
    setGameState('LOADING');
    const count = countOverride || questionCount;
    
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      let data: Question[] = [];
      
      if (dbStatus === 'connected') {
        let query = supabase
          .from('questions')
          .select('*')
          .eq('difficulty', difficulty);
        
        if (banca !== 'Geral') {
          query = query.eq('banca', banca);
        }
        
        const { data: fetched, error } = await query;
        if (!error && fetched && fetched.length > 0) {
          data = fetched;
        }
      }

      if (data.length === 0) {
        data = questions.filter(q => q.difficulty === difficulty);
      }

      let pool = [...data].sort(() => Math.random() - 0.5);

      if (pool.length < count && banca !== 'Geral') {
        const othersSameDifficulty = questions.filter(q => q.difficulty === difficulty && q.banca !== banca);
        pool = [...pool, ...othersSameDifficulty.sort(() => Math.random() - 0.5)];
      }

      if (pool.length < count) {
        const currentIds = new Set(pool.map(q => q.id));
        const absoluteFallback = questions
          .filter(q => !currentIds.has(q.id))
          .sort(() => Math.random() - 0.5);
        pool = [...pool, ...absoluteFallback];
      }

      const finalSelection = pool
        .slice(0, count)
        .sort(() => Math.random() - 0.5);
      
      setQuizSet(finalSelection);
      setCurrentIdx(0);
      setScore(0);
      setTimeLeft(120);
      setSelectedOption(null);
      setIsCorrect(null);
      setGameState('QUIZ');
    } catch (err) {
      console.error("Erro crítico ao iniciar quiz:", err);
      const emergency = [...questions].sort(() => Math.random() - 0.5).slice(0, count);
      setQuizSet(emergency);
      setGameState('QUIZ');
    }
  }, [difficulty, banca, questionCount, dbStatus]);

  const playSound = useCallback((type: 'SELECT' | 'CORRECT' | 'WRONG') => {
    const s = gameSounds[type];
    if (s) {
      s.currentTime = 0;
      s.volume = 0.8; // Volume mais alto para melhor feedback
      s.play().catch(e => {
        console.log(`Audio play blocked for ${type}`, e);
      });
    }
  }, []);

  const [selectingLevel, setSelectingLevel] = useState<Difficulty | null>(null);

  const handleLevelSelect = useCallback((level: Difficulty) => {
    playSound('SELECT');
    setSelectingLevel(level);
    setTimeout(() => {
      setDifficulty(level);
      setGameState('SELECT_BANCA');
      setSelectingLevel(null);
    }, 300);
  }, [playSound]);

  const [selectingBanca, setSelectingBanca] = useState<Banca | null>(null);

  const handleBancaSelect = useCallback((b: Banca) => {
    playSound('SELECT');
    setSelectingBanca(b);
    setTimeout(() => {
      setBanca(b);
      setGameState('SELECT_COUNT');
      setSelectingBanca(null);
    }, 300);
  }, [playSound]);

  const handleCountSelect = useCallback((count: number) => {
    playSound('SELECT');
    setQuestionCount(count);
    startQuiz(count);
  }, [playSound, startQuiz]);

  const resetSimulation = useCallback(() => {
    setQuizSet([]);
    setCurrentIdx(0);
    setScore(0);
    setTimeLeft(120);
    setSelectedOption(null);
    setIsCorrect(null);
    setGameState('SELECT_LEVEL');
  }, []);

  const handleAnswer = useCallback((option: string) => {
    if (selectedOption || gameState !== 'QUIZ') return;
    
    const currentQ = quizSet[currentIdx];
    if (!currentQ) return;

    const correct = option === currentQ.answer;
    setSelectedOption(option);
    setIsCorrect(correct);
    
    if (correct) {
      playSound('CORRECT');
      setScore(s => s + 1);
    } else {
      playSound('WRONG');
    }
    
    setTimeout(() => {
      setGameState('FEEDBACK');
    }, 800);
  }, [selectedOption, gameState, currentIdx, quizSet, playSound]);

  const nextQuestion = useCallback(() => {
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

  useEffect(() => {
    let timer: number;
    if (gameState === 'QUIZ' && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'QUIZ') {
      handleAnswer('__TIMEOUT__');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="h-screen bg-slate-50 font-sans text-slate-800 flex flex-col items-center justify-center p-0 selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      
      {/* Container Principal - Responsivo para PC e Celular */}
      <div className="bg-white w-full max-w-lg h-full md:h-[95vh] md:max-h-[850px] flex flex-col relative overflow-hidden shadow-2xl md:shadow-none">
        
        {/* Barra de Progresso Sutil */}
        {(gameState === 'QUIZ' || gameState === 'FEEDBACK') && (
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 z-50">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          
          {/* TELA DE SELEÇÃO DE NÍVEL */}
          {gameState === 'SELECT_LEVEL' && (
            <motion.div 
              key="select-level"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col items-center justify-center px-10 text-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10"></div>
              
              <div className="absolute top-12 right-8 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                  ONLINE
                </span>
              </div>

              <div className="mb-4">
                <BrainCircuit size={48} className="text-blue-600" />
              </div>
              
              <h1 className="text-3xl font-black text-slate-900 mb-1 uppercase tracking-tight leading-none">
                SIMULADO <span className="text-blue-600">PRO</span>
              </h1>
              <p className="text-[9px] text-slate-400 mb-8 font-bold uppercase tracking-[0.4em]">
                PASSO 1: ESCOLHA O NÍVEL
              </p>
              
              <div className="w-full space-y-2">
                {(['Fácil', 'Médio', 'Difícil'] as Difficulty[]).map((level) => {
                  const isBeingSelected = selectingLevel === level;
                  return (
                    <motion.button
                      key={level}
                      disabled={selectingLevel !== null}
                      onClick={() => handleLevelSelect(level)}
                      animate={{
                        scale: isBeingSelected ? 1.02 : 1,
                        backgroundColor: isBeingSelected ? '#2563eb' : '#ffffff',
                        borderColor: isBeingSelected ? '#2563eb' : '#f8fafc'
                      }}
                      whileHover={!selectingLevel ? { scale: 1.01, backgroundColor: '#2563eb', borderColor: '#2563eb' } : {}}
                      whileTap={!selectingLevel ? { scale: 0.98 } : {}}
                      className="w-full group p-5 flex items-center justify-between transition-none shadow-sm border relative overflow-hidden"
                    >
                      {isBeingSelected && (
                        <motion.div 
                          className="absolute inset-0 bg-blue-500/10"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 0.4, ease: "linear" }}
                        />
                      )}
                      
                      <span className={`text-base font-black uppercase tracking-tighter relative z-10 ${
                        isBeingSelected ? 'text-white' : 'text-slate-700 group-hover:text-white'
                      }`}>{level}</span>
                      
                      <div className={`p-1 transition-colors relative z-10 ${
                        isBeingSelected ? 'bg-white/20' : 'bg-slate-50 group-hover:bg-white/20'
                      }`}>
                        <ChevronRight size={18} className={`${
                          isBeingSelected ? 'text-white' : 'text-blue-600 group-hover:text-white'
                        }`} strokeWidth={3} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TELA DE SELEÇÃO DE BANCA */}
          {gameState === 'SELECT_BANCA' && (
            <motion.div 
              key="select-banca"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col items-center justify-center px-10 text-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10"></div>
              
              <button 
                onClick={() => setGameState('SELECT_LEVEL')}
                className="absolute top-12 left-8 flex items-center gap-2 text-[8px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors"
              >
                <ArrowRight size={12} className="rotate-180" /> VOLTAR
              </button>

              <div className="mb-4">
                <BrainCircuit size={48} className="text-blue-600" />
              </div>
              
              <h1 className="text-3xl font-black text-slate-900 mb-1 uppercase tracking-tight leading-none">
                BANCA <span className="text-blue-600">EXAMINADORA</span>
              </h1>
              <p className="text-[9px] text-slate-400 mb-8 font-bold uppercase tracking-[0.4em]">
                PASSO 2: FILTRAR POR INSTITUIÇÃO
              </p>
              
              <div className="w-full grid grid-cols-1 gap-2">
                {(['Geral', 'FGV', 'CESPE', 'FCC', 'Vunesp'] as Banca[]).map((b) => {
                  const isBeingSelected = selectingBanca === b;
                  return (
                    <motion.button
                      key={b}
                      disabled={selectingBanca !== null}
                      onClick={() => handleBancaSelect(b)}
                      animate={{
                        scale: isBeingSelected ? 1.02 : 1,
                        backgroundColor: isBeingSelected ? '#2563eb' : '#ffffff',
                        borderColor: isBeingSelected ? '#2563eb' : '#f8fafc'
                      }}
                      whileHover={!selectingBanca ? { scale: 1.01, backgroundColor: '#2563eb', borderColor: '#2563eb' } : {}}
                      whileTap={!selectingBanca ? { scale: 0.98 } : {}}
                      className="w-full group p-4 flex items-center justify-between transition-none shadow-sm border relative overflow-hidden"
                    >
                      {isBeingSelected && (
                        <motion.div 
                          className="absolute inset-0 bg-blue-500/10"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 0.4, ease: "linear" }}
                        />
                      )}
                      
                      <span className={`text-sm font-black uppercase tracking-widest relative z-10 ${
                        isBeingSelected ? 'text-white' : 'text-slate-700 group-hover:text-white'
                      }`}>{b}</span>
                      
                      <div className={`p-1 transition-colors relative z-10 ${
                        isBeingSelected ? 'bg-white/20' : 'bg-slate-50 group-hover:bg-white/20'
                      }`}>
                        <ChevronRight size={18} className={`${
                          isBeingSelected ? 'text-white' : 'text-slate-600 group-hover:text-white'
                        }`} strokeWidth={3} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TELA DE SELEÇÃO DE QUANTIDADE */}
          {gameState === 'SELECT_COUNT' && (
            <motion.div 
              key="select-count"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col items-center justify-center px-10 text-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10"></div>
              
              <button 
                onClick={() => setGameState('SELECT_BANCA')}
                className="absolute top-12 left-8 flex items-center gap-2 text-[8px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors"
              >
                <ArrowRight size={12} className="rotate-180" /> VOLTAR
              </button>

              <div className="mb-4">
                <BrainCircuit size={48} className="text-blue-600" />
              </div>
              
              <h1 className="text-3xl font-black text-slate-900 mb-1 uppercase tracking-tight leading-none">
                DEFINA A <span className="text-blue-600">QUANTIDADE</span>
              </h1>
              <p className="text-[7.5px] text-slate-400 mb-8 font-black uppercase tracking-[0.1em] whitespace-nowrap">
                PASSO FINAL: ESCOLHA O NÚMERO DE QUESTÕES
              </p>
              
              <div className="w-full grid grid-cols-2 gap-3">
                {[10, 15, 20, 25].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleCountSelect(num)}
                    className="w-full group bg-white hover:bg-blue-600 py-8 flex flex-col items-center justify-center transition-all active:scale-[0.98] shadow-sm border border-slate-50"
                  >
                    <span className="text-3xl font-black text-slate-900 group-hover:text-white">{num}</span>
                    <span className="text-[9px] font-black text-slate-400 group-hover:text-white/60 uppercase tracking-[0.2em]">QUESTÕES</span>
                  </button>
                ))}
              </div>

              {isLoading && (
                <div className="mt-8 flex items-center gap-3">
                   <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                   <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Sorteando questões...</span>
                </div>
              )}
            </motion.div>
          )}

          {/* TELA DE CARREGAMENTO (LAZY LOADING) */}
          {gameState === 'LOADING' && (
            <motion.div 
              key="loading-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center px-10 text-center"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
                <BrainCircuit size={64} className="text-blue-600 relative z-10 animate-bounce" />
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">
                PREPARANDO <span className="text-blue-600">QUESTÕES</span>
              </h2>
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                 <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                 <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
              </div>

              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] max-w-[200px] leading-relaxed">
                Refinando algoritmos e filtrando o melhor conteúdo para você.
              </p>
            </motion.div>
          )}

          {/* QUIZ QUESTÃO - SEM ESPAÇOS SOBRANDO */}
          {gameState === 'QUIZ' && (
            <motion.div 
              key="quiz-main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center pt-4 px-6 overflow-hidden pb-8"
            >
              {/* CRONOMETRO - HEADER BLOCK COMPACTO E LARGO */}
              <div className="w-full mb-2">
                <div className="bg-slate-900 w-full py-4 px-6 flex items-center justify-between shadow-lg border-b-4 border-blue-600 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-full bg-blue-600/10 skew-x-[-20deg] translate-x-16"></div>
                  
                  <div className="flex flex-col relative z-10">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] leading-none mb-1.5">
                      TREINAMENTO {difficulty}
                    </span>
                    <span className="text-sm font-black text-white uppercase tracking-tight">
                      QUESTÃO {currentIdx + 1} <span className="text-slate-500">/ {quizSet.length}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <Timer size={20} className={`${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-blue-500'}`} />
                      <span className={`text-4xl font-mono font-black tabular-nums leading-none ${timeLeft < 10 ? 'text-red-500' : 'text-white'}`}>
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PERGUNTA EM BOX RETO */}
              <div className="w-full bg-blue-50/30 p-6 flex flex-col items-center justify-center text-center mb-2 min-h-[140px] shadow-sm border border-blue-100/50">
                 <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">
                   {quizSet[currentIdx]?.question || 'Carregando questão...'}
                 </h2>
              </div>

              {/* OPÇÕES - COM FEEDBACK VISUAL IMEDIATO */}
              <div className={`w-full ${quizSet[currentIdx].options.length === 2 ? 'grid grid-cols-2 gap-4' : 'space-y-3'} mb-6`}>
                {quizSet[currentIdx].options.map((opt, i) => {
                  const isSelected = selectedOption === opt;
                  const isCorrectAnswer = opt === quizSet[currentIdx].answer;
                  
                  let buttonClass = "bg-white border-slate-200 hover:border-blue-400 hover:shadow-md";
                  let badgeClass = "bg-slate-50 border-slate-100 text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600";
                  
                  if (isSelected) {
                    if (isCorrectAnswer) {
                      buttonClass = "bg-green-50 border-green-500 shadow-lg shadow-green-100 ring-2 ring-green-100";
                      badgeClass = "bg-green-600 text-white border-green-600";
                    } else {
                      buttonClass = "bg-red-50 border-red-500 shadow-lg shadow-red-100 ring-2 ring-red-100";
                      badgeClass = "bg-red-600 text-white border-red-600";
                    }
                  } else if (selectedOption && isCorrectAnswer) {
                    buttonClass = "bg-green-50 border-green-200 opacity-80";
                    badgeClass = "bg-green-500 text-white border-green-500";
                  }

                  return (
                    <button
                      key={i}
                      disabled={!!selectedOption}
                      onClick={() => handleAnswer(opt)}
                      className={`w-full text-left p-4 border shadow-sm transition-all flex items-center gap-4 group active:scale-[0.99] ${quizSet[currentIdx].options.length === 2 ? 'flex-col items-center text-center justify-center py-6' : ''} ${buttonClass} ${selectedOption ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <span className={`${quizSet[currentIdx].options.length === 2 ? 'w-10 h-10 text-sm mb-2' : 'w-8 h-8 text-[11px]'} border flex items-center justify-center font-black transition-all shrink-0 ${badgeClass}`}>
                        {String.fromCharCode(64 + (i + 1))}
                      </span>
                      <span className={`${quizSet[currentIdx].options.length === 2 ? 'text-sm' : 'text-sm'} font-bold text-slate-700 flex-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight leading-snug`}>{opt}</span>
                      
                      {isSelected && (
                        isCorrectAnswer 
                          ? <CheckCircle2 size={20} className="text-green-600 animate-in zoom-in" />
                          : <XCircle size={20} className="text-red-600 animate-in zoom-in" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* FEEDBACK - CENTRALIZADO E OTIMIZADO */}
          {gameState === 'FEEDBACK' && (
            <motion.div 
              key="feedback-main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col items-center pt-16 px-8 h-full relative overflow-hidden"
            >
               <div className="absolute top-8 text-slate-200 font-black text-base opacity-30 tabular-nums">
                  {formatTime(timeLeft)}
               </div>

               <div className="w-full flex-1 flex flex-col items-center justify-start py-6 max-h-[90%]">
                  <div className="mb-6 text-center">
                    <h3 className={`text-4xl font-black uppercase tracking-tighter leading-none ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {feedbackText}
                    </h3>
                  </div>

                 {/* CARD DE COMENTÁRIO - ESTILO LIMPO E BRANCO */}
                 <div className="w-full flex-1 bg-white p-6 flex flex-col mb-8 shadow-sm border border-slate-100 overflow-hidden min-h-[350px]">
                   
                   {/* OPÇÕES RECAP - PARA CLAREZA */}
                   <div className="w-full space-y-2 mb-4">
                      {quizSet[currentIdx].options.map((opt, i) => {
                        const isCorrectOpt = opt === quizSet[currentIdx].answer;
                        const isUserSelected = opt === selectedOption;
                        
                        let bgColor = 'bg-slate-50';
                        let borderColor = 'border-slate-100';
                        let textColor = 'text-slate-400';
                        let badgeColor = 'bg-white';

                        if (isCorrectOpt) {
                          bgColor = 'bg-green-50';
                          borderColor = 'border-green-200';
                          textColor = 'text-green-700';
                          badgeColor = 'bg-green-600 text-white';
                        } else if (isUserSelected && !isCorrectOpt) {
                          bgColor = 'bg-red-50';
                          borderColor = 'border-red-200';
                          textColor = 'text-red-700';
                          badgeColor = 'bg-red-600 text-white';
                        }

                        return (
                          <div
                            key={i}
                            className={`w-full p-3 border ${borderColor} ${bgColor} flex items-center gap-3 transition-all`}
                          >
                            <span className={`w-7 h-7 text-[10px] ${badgeColor} border border-slate-200 flex items-center justify-center font-black shrink-0 shadow-sm`}>
                              {String.fromCharCode(64 + (i + 1))}
                            </span>
                            <span className={`text-[11px] font-bold uppercase tracking-tight ${textColor} line-clamp-1`}>{opt}</span>
                            {isCorrectOpt && <CheckCircle2 size={14} className="ml-auto text-green-600" />}
                            {isUserSelected && !isCorrectOpt && <XCircle size={14} className="ml-auto text-red-600" />}
                          </div>
                        );
                      })}
                   </div>

                   <div className="pt-4 border-t border-slate-100 flex-1 overflow-hidden flex flex-col">
                     <div className="flex items-center gap-2 mb-2">
                        <div className="bg-slate-50 p-1.5">
                          <MessageSquareQuote size={12} className="text-slate-400" />
                        </div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">ANÁLISE DO PROFESSOR</span>
                     </div>
                     
                     <div className="text-xs font-medium text-slate-600 leading-relaxed overflow-y-auto pr-2 scrollbar-hide">
                       {quizSet[currentIdx].explanation}
                     </div>
                   </div>
                 </div>

                 <button
                  onClick={nextQuestion}
                  className="w-full bg-slate-900 text-white font-black py-4 rounded-none transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs hover:bg-blue-700 active:scale-95 shadow-xl"
                >
                  PRÓXIMA QUESTÃO
                  <ArrowRight size={18} strokeWidth={3} />
                </button>
               </div>
            </motion.div>
          )}

          {/* RELATÓRIO - CENTRALIZADO E MELHORADO */}
          {gameState === 'RESULT' && (
            <motion.div 
              key="result-main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center px-10 text-center"
            >
               <div className="mb-4 text-slate-900">
                 <Trophy size={64} strokeWidth={1} />
               </div>
               
               <h2 className="text-3xl font-black text-slate-900 mb-1 uppercase tracking-tighter">RELATÓRIO</h2>
               <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 bg-slate-50 px-4 py-1 inline-block">NÍVEL {difficulty}</div>
               
                <div className="grid grid-cols-2 gap-4 w-full mb-10">
                  <div className="bg-slate-50 p-6 flex flex-col items-center">
                    <div className="text-4xl font-black text-green-600 mb-1">{score}</div>
                    <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">ACERTOS</div>
                  </div>
                  <div className="bg-slate-50 p-6 flex flex-col items-center">
                    <div className="text-4xl font-black text-red-600 mb-1">{quizSet.length - score}</div>
                    <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">ERROS</div>
                  </div>
                </div>

               <button
                onClick={resetSimulation}
                className="w-full bg-slate-900 text-white font-black py-6 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs active:scale-95 hover:bg-blue-600"
              >
                <RotateCcw size={16} strokeWidth={3} />
                RECOMEÇAR SIMULADO
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

