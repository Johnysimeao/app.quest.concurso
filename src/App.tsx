import React, { useState, useEffect, useCallback } from 'react';
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
import { questions, Question } from './data';

type Difficulty = 'Fácil' | 'Médio' | 'Difícil';
type GameState = 'START' | 'QUIZ' | 'FEEDBACK' | 'RESULT';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('START');
  const [difficulty, setDifficulty] = useState<Difficulty>('Fácil');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [quizSet, setQuizSet] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const startQuiz = (level: Difficulty) => {
    const filtered = questions.filter(q => q.difficulty === level);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, 15);
    setQuizSet(shuffled);
    setDifficulty(level);
    setCurrentIdx(0);
    setScore(0);
    setTimeLeft(120);
    setSelectedOption(null);
    setIsCorrect(null);
    setGameState('QUIZ');
  };

  const handleAnswer = (option: string) => {
    if (selectedOption) return;
    const currentQ = quizSet[currentIdx];
    const correct = option === currentQ.answer;
    setSelectedOption(option);
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
    setGameState('FEEDBACK');
  };

  const nextQuestion = () => {
    if (currentIdx < quizSet.length - 1) {
      setCurrentIdx(i => i + 1);
      setTimeLeft(120);
      setSelectedOption(null);
      setIsCorrect(null);
      setGameState('QUIZ');
    } else {
      setGameState('RESULT');
    }
  };

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
              animate={{ width: `${((currentIdx + 1) / 15) * 100}%` }}
              className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          
          {/* TELA INICIAL - PREENCHIDA E COLORIDA */}
          {gameState === 'START' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center px-8 text-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10"></div>
              
              <div className="bg-slate-900 p-4 mb-8 shadow-xl">
                <BrainCircuit size={48} className="text-blue-400" />
              </div>
              
              <h1 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight leading-none">
                SIMULADO DE <br/>
                <span className="text-blue-600">INFORMÁTICA</span>
              </h1>
              <p className="text-[10px] text-slate-400 mb-10 font-bold uppercase tracking-[0.3em]">
                Treinamento Intensivo Preparatório
              </p>
              
              <div className="w-full space-y-2">
                <h3 className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">SELECIONE A DIFICULDADE</h3>
                {(['Fácil', 'Médio', 'Difícil'] as Difficulty[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => startQuiz(level)}
                    className="w-full group bg-white hover:bg-blue-600 p-5 flex items-center justify-between transition-all active:scale-[0.98] shadow-sm"
                  >
                    <span className="text-base font-black text-slate-700 group-hover:text-white uppercase tracking-tighter">{level}</span>
                    <div className="bg-slate-50 p-1 group-hover:bg-white/20 transition-colors">
                      <ChevronRight size={18} className="text-blue-600 group-hover:text-white" strokeWidth={3} />
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-12 text-[8px] font-bold text-slate-300 uppercase tracking-widest">
                Questões atualizadas 2024 • Padrão Concursos
              </div>
            </motion.div>
          )}

          {/* QUIZ QUESTÃO - SEM ESPAÇOS SOBRANDO */}
          {gameState === 'QUIZ' && (
            <motion.div 
              key="quiz-main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center pt-8 px-6"
            >
              {/* CRONOMETRO - HEADER BLOCK COMPACTO E LARGO */}
              <div className="w-full mb-4 mt-2">
                <div className="bg-slate-900 w-full py-4 px-6 flex items-center justify-between shadow-lg border-b-4 border-blue-600 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-full bg-blue-600/10 skew-x-[-20deg] translate-x-16"></div>
                  
                  <div className="flex flex-col relative z-10">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] leading-none mb-1">
                      TREINAMENTO {difficulty}
                    </span>
                    <span className="text-sm font-black text-white uppercase tracking-tight">
                      QUESTÃO {currentIdx + 1} <span className="text-slate-500">/ 15</span>
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
              <div className="w-full bg-[#f8faff] p-4 flex flex-col items-center justify-center text-center mb-4 min-h-[90px] shadow-sm border border-slate-100">
                 <h2 className="text-lg font-bold text-slate-800 leading-tight">
                   {quizSet[currentIdx].question}
                 </h2>
              </div>

              {/* OPÇÕES - COLADAS NA PERGUNTA E COM EFEITO AZUL */}
              <div className="w-full space-y-2 mb-8">
                {quizSet[currentIdx].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    className="w-full text-left p-4 bg-gradient-to-r from-blue-100/70 via-blue-50/40 to-white border border-blue-200/60 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.06)] hover:shadow-md hover:border-blue-400/40 transition-all flex items-center gap-4 group active:scale-[0.99]"
                  >
                    <span className="w-10 h-10 bg-white border border-blue-100 text-slate-400 flex items-center justify-center font-black text-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shrink-0 shadow-sm">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm font-bold text-slate-700 flex-1 group-hover:text-blue-900 transition-colors uppercase tracking-tight">{opt}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* FEEDBACK - CENTRALIZADO E OTIMIZADO */}
          {gameState === 'FEEDBACK' && (
            <motion.div 
              key="feedback-main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center px-8 h-full relative"
            >
               <div className="absolute top-8 text-slate-200 font-black text-xl opacity-30 tabular-nums">
                  {formatTime(timeLeft)}
               </div>

               <div className="w-full flex flex-col items-center">
                 <div className="mb-6 text-center">
                   <h3 className={`text-5xl font-black uppercase tracking-tighter leading-none ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                     {isCorrect ? 'CORRETO' : 'ERRADO'}
                   </h3>
                 </div>

                 {/* CARD DE COMENTÁRIO - ESTILO LIMPO E BRANCO */}
                 <div className="w-full bg-white p-6 flex flex-col mb-6 overflow-hidden relative shadow-sm border border-slate-100">
                   
                   {/* GABARITO - CLARO E DIRETO */}
                   <div className="mb-5 flex flex-col items-start gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className="bg-slate-100 p-1">
                          <CheckCircle2 size={12} className="text-blue-600" />
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">GABARITO OFICIAL</span>
                      </div>
                      <span className="text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-tight leading-tight">{quizSet[currentIdx].answer}</span>
                   </div>

                   <div className="pt-5 border-t border-slate-50">
                     <div className="flex items-center gap-2.5 mb-3">
                        <div className="bg-slate-50 p-1.5">
                          <MessageSquareQuote size={13} className="text-slate-400" />
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">COMENTÁRIO TÉCNICO</span>
                     </div>
                     
                     <div className="text-base font-bold text-slate-600 leading-relaxed">
                       {quizSet[currentIdx].explanation}
                     </div>
                   </div>
                 </div>

                 <button
                  onClick={nextQuestion}
                  className="w-full bg-slate-900 text-white font-black py-5 rounded-none transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs hover:bg-blue-700 active:scale-95 shadow-xl"
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
                   <div className="text-4xl font-black text-red-600 mb-1">{15 - score}</div>
                   <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">ERROS</div>
                 </div>
               </div>

               <button
                onClick={() => setGameState('START')}
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

