/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Library,
  BookOpen,
  Info
} from 'lucide-react';
import { questions, Question } from './data';

type AppState = 'HOME' | 'QUIZ' | 'RESULT';

export default function App() {
  const [gameState, setGameState] = useState<AppState>('HOME');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{questionId: number, isCorrect: boolean}[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [showHint, setShowHint] = useState(false);

  const categories = ['Todas', ...new Set(questions.map(q => q.category))];

  const startQuiz = () => {
    const filtered = selectedCategory === 'Todas' 
      ? [...questions].sort(() => Math.random() - 0.5) 
      : questions.filter(q => q.category === selectedCategory).sort(() => Math.random() - 0.5);
    
    setQuizQuestions(filtered.slice(0, 12)); // Full quiz session
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setGameState('QUIZ');
    setIsAnswered(false);
    setTimeLeft(30);
    setShowHint(false);
  };

  const handleAnswer = (answer: string | boolean) => {
    if (isAnswered) return;
    
    const currentQ = quizQuestions[currentQuestionIndex];
    const correct = answer === currentQ.answer;
    
    if (correct) setScore(prev => prev + 1);
    
    setUserAnswers(prev => [...prev, { questionId: currentQ.id, isCorrect: correct }]);
    setIsAnswered(true);
  };

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsAnswered(false);
      setTimeLeft(30);
      setShowHint(false);
    } else {
      setGameState('RESULT');
    }
  }, [currentQuestionIndex, quizQuestions.length]);

  useEffect(() => {
    if (gameState === 'QUIZ' && !isAnswered && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleAnswer('__TIMEOUT__'); // Trigger timeout
    }
  }, [timeLeft, gameState, isAnswered]);

  const renderNav = () => (
    <nav className="h-16 bg-slate-900 text-white px-8 flex items-center justify-between shadow-lg shrink-0 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-lg">i</div>
        <span className="text-xl font-semibold tracking-tight">Simulado Pro v2.0</span>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <div className="text-right">
          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none mb-1">Estudante</p>
          <p className="text-sm font-medium">Usuário Concurseiro</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center">
          <span className="text-sm font-medium uppercase">UC</span>
        </div>
      </div>
    </nav>
  );

  const renderHome = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-6 text-center"
      id="home-screen"
    >
      <div className="mb-8 inline-flex p-6 bg-blue-500 rounded-2xl text-white shadow-xl rotate-3">
        <Library size={64} />
      </div>
      <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Domine a Informática</h1>
      <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        O simulador definitivo para candidatos a concursos públicos. Teste seu conhecimento 
        em Hardware, Redes, Office e muito mais com o padrão das grandes bancas.
      </p>

      <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        <div>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <BookOpen size={16} className="text-blue-500" />
            Configuração do Simulado
          </h2>
          <p className="text-slate-600 mb-6 font-medium">
            Selecione uma disciplina específica ou desafie-se com todas as matérias de uma vez.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                  selectedCategory === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:bg-blue-50'
                }`}
                id={`cat-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
            <h3 className="text-sm font-bold text-slate-800 mb-2">Informações da Sessão</h3>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex justify-between"><span>Questões:</span> <span className="font-bold text-slate-700">12</span></li>
              <li className="flex justify-between"><span>Tempo por questão:</span> <span className="font-bold text-slate-700">30s</span></li>
              <li className="flex justify-between"><span>Nível:</span> <span className="font-bold text-slate-700">Concurso Público</span></li>
            </ul>
          </div>
          
          <button
            onClick={startQuiz}
            className="w-full bg-slate-900 text-white font-bold py-5 px-8 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl translate-y-0 hover:-translate-y-1 active:translate-y-1"
            id="btn-start"
          >
            Começar Agora
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderQuiz = () => {
    const q = quizQuestions[currentQuestionIndex];
    if (!q) return null;

    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    const dashOffset = 377 - (377 * timeLeft) / 30;

    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8" id="quiz-screen">
        {/* Main Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex-1 flex flex-col overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {q.category}
              </span>
              <span className="text-slate-500 text-sm font-medium italic">
                Questão {String(currentQuestionIndex + 1).padStart(2, '0')} de {quizQuestions.length}
              </span>
            </div>
            
            <div className="p-8 md:p-12 flex-1">
              <h2 className="text-xl md:text-2xl font-medium leading-relaxed mb-12 text-slate-800">
                {q.question}
              </h2>

              <div className="space-y-4">
                {q.type === 'multiple' ? (
                  q.options?.map((opt, idx) => {
                    const isCorrect = opt === q.answer;
                    const isSelected = isAnswered && opt === q.answer;
                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleAnswer(opt)}
                        className={`w-full text-left p-5 rounded-xl border transition-all flex items-center gap-5 group ${
                          isAnswered 
                            ? (isCorrect ? 'bg-green-50 border-green-500 text-green-800' : 'bg-white border-slate-100 text-slate-300 opacity-60')
                            : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700'
                        }`}
                      >
                        <span className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold transition-colors ${
                          isAnswered && isCorrect ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-500 group-hover:text-white'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-base md:text-lg font-medium leading-normal">{opt}</span>
                      </button>
                    );
                  })
                ) : (
                  <div className="grid grid-cols-2 gap-6">
                    {[true, false].map((val) => {
                      const isCorrect = val === q.answer;
                      return (
                        <button
                          key={String(val)}
                          disabled={isAnswered}
                          onClick={() => handleAnswer(val)}
                          className={`p-8 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${
                            isAnswered
                              ? (isCorrect ? 'bg-green-50 border-green-500 text-green-700' : 'bg-white border-slate-100 text-slate-200 opacity-60')
                              : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 uppercase tracking-[0.2em] font-bold'
                          }`}
                        >
                          <span className="text-xl">{val ? 'Certo' : 'Errado'}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
              <div className="flex gap-2">
                {!isAnswered && (
                  <button 
                    onClick={() => setShowHint(!showHint)}
                    className="px-6 py-2.5 text-slate-500 font-bold hover:text-blue-600 transition-colors text-xs uppercase tracking-widest flex items-center gap-2"
                  >
                    <HelpCircle size={16} />
                    {showHint ? 'Ocultar Dica' : 'Dica'}
                  </button>
                )}
              </div>
              
              {isAnswered && (
                <button
                  onClick={nextQuestion}
                  className="px-10 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md flex items-center gap-2 transform active:scale-95 transition-all uppercase text-xs tracking-widest"
                  id="btn-next"
                >
                  Confirmar e Continuar
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>

          <AnimatePresence>
            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-xl shadow-sm flex items-start gap-6"
              >
                <div className="bg-blue-500 p-3 rounded-xl text-white shrink-0 shadow-lg">
                  <Info size={28} />
                </div>
                <div>
                  <h4 className="text-blue-900 font-bold mb-2 uppercase text-xs tracking-widest">Base Racional da Resposta</h4>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {q.explanation}
                  </p>
                </div>
              </motion.div>
            )}
            {!isAnswered && showHint && (
               <motion.div 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-amber-50 border border-amber-200 p-6 rounded-xl flex items-center gap-4 text-amber-800"
             >
               <HelpCircle size={20} className="shrink-0" />
               <p className="text-sm font-medium italic">{q.hint}</p>
             </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Cronômetro da Questão</h3>
            <div className="flex items-center justify-center">
              <div className="relative">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle cx="80" cy="80" r="75" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100"></circle>
                  <circle 
                    cx="80" cy="80" r="75" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    fill="transparent" 
                    strokeDasharray="471" 
                    strokeDashoffset={471 - (471 * timeLeft / 30)}
                    className={`transition-all duration-1000 ${timeLeft < 10 ? 'text-red-500' : 'text-blue-500'}`}
                  ></circle>
                </svg>
                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-colors ${timeLeft < 10 ? 'text-red-500' : 'text-slate-800'}`}>
                  <span className="text-4xl font-mono font-bold leading-none">{String(timeLeft).padStart(2, '0')}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Segundos</span>
                </div>
              </div>
            </div>
            <p className="text-center mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Padrão Cebraspe: 30s</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 flex-1 flex flex-col">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Mapa de Questões</h3>
            <div className="grid grid-cols-4 gap-4 flex-1">
              {quizQuestions.map((question, idx) => {
                const answer = userAnswers[idx];
                const isCurrent = idx === currentQuestionIndex;
                
                let style = "border-slate-200 text-slate-400 bg-white";
                if (answer) {
                  style = answer.isCorrect ? "bg-green-500 text-white border-green-500" : "bg-red-500 text-white border-red-500";
                } else if (isCurrent) {
                  style = "border-blue-500 text-blue-600 bg-blue-50 ring-4 ring-blue-100";
                }

                return (
                  <div key={idx} className={`w-full aspect-square border-2 rounded-xl flex items-center justify-center font-bold text-sm shadow-sm transition-all ${style}`}>
                    {idx + 1}
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                <span>Eficiência Atual</span>
                <span className="text-slate-600">{Math.round((score / (userAnswers.length || 1)) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / quizQuestions.length) * 100}%` }}
                  className="bg-blue-500 h-full rounded-full transition-all duration-1000"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const percentage = (score / quizQuestions.length) * 100;
    
    return (
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-2xl mx-auto px-6 h-[calc(100vh-200px)] flex items-center"
        id="result-screen"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center border border-slate-200 w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-slate-900"></div>
          
          <div className="mb-8 inline-block p-8 bg-yellow-100 rounded-2xl text-yellow-600 shadow-inner rotate-3">
            <Trophy size={80} className="drop-shadow-md" />
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Resultado Final</h2>
          <p className="text-slate-500 mb-12 text-lg font-medium">Informática para Concursos - {selectedCategory}</p>
          
          <div className="grid grid-cols-2 gap-8 mb-12 text-left">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 text-slate-400 mb-2">
                <CheckCircle2 size={24} className="text-green-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Acertos</span>
              </div>
              <div className="text-5xl font-mono font-bold text-slate-800">{score}</div>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 text-slate-400 mb-2">
                <XCircle size={24} className="text-red-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Erros</span>
              </div>
              <div className="text-5xl font-mono font-bold text-slate-800">{quizQuestions.length - score}</div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
              <span>Nível de Preparação</span>
              <span className="text-slate-800 text-sm">{Math.round(percentage)}%</span>
            </div>
            <div className="w-full h-5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 p-1">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                className={`h-full rounded-full ${percentage >= 70 ? 'bg-green-500 shadow-green-200' : percentage >= 40 ? 'bg-amber-500' : 'bg-red-500'} shadow-lg scale-x-105`}
              />
            </div>
          </div>

          <button
            onClick={() => setGameState('HOME')}
            className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white font-bold py-6 px-8 rounded-xl hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
            id="btn-restart"
          >
            <RotateCcw size={22} />
            Refazer Simulado
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 overflow-x-hidden pt-32 pb-20 selection:bg-blue-100 selection:text-blue-900">
      {renderNav()}
      <main className="container mx-auto">
        {gameState === 'HOME' && renderHome()}
        {gameState === 'QUIZ' && renderQuiz()}
        {gameState === 'RESULT' && renderResult()}
      </main>
      
      <div className="fixed bottom-6 right-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] pointer-events-none opacity-50">
        Simulado Pro • v2.0 • 2026
      </div>
    </div>
  );
}
