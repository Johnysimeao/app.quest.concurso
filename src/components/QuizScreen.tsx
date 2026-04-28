import React from 'react';
import { motion } from 'motion/react';
import { Timer } from 'lucide-react';
import { Question, Difficulty } from '../types';

interface QuizProps {
  isDarkMode: boolean;
  difficulty: Difficulty;
  currentIdx: number;
  totalQuestions: number;
  timeLeft: number;
  formatTime: (s: number) => string;
  question: Question;
  selectedOption: string | null;
  onAnswer: (opt: string) => void;
  onSkip: () => void;
}

export const QuizScreen: React.FC<QuizProps> = ({
  isDarkMode,
  difficulty,
  currentIdx,
  totalQuestions,
  timeLeft,
  formatTime,
  question,
  selectedOption,
  onAnswer,
  onSkip
}) => {
  return (
    <motion.div 
      key="quiz-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col items-center pt-2 px-4 md:px-6 overflow-y-auto pb-8 scrollbar-hide"
    >
      {/* CRONOMETRO - HEADER BLOCK COMPACTO E LARGO */}
      <div className="w-full mb-2">
        <div className="bg-slate-900 w-full py-4 px-6 flex items-center justify-between shadow-lg border-b-4 border-blue-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-full bg-blue-600/10 skew-x-[-20deg] translate-x-16"></div>
          
          <div className="flex flex-col relative z-10">
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] leading-none mb-1.5">
              TREINAMENTO {difficulty.toUpperCase()}
            </span>
            <span className="text-sm font-black text-white uppercase tracking-tight">
              QUESTÃO {currentIdx + 1} <span className="text-slate-500">/ {totalQuestions}</span>
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
      <div className={`w-full ${isDarkMode ? 'bg-blue-950/20 hover:bg-blue-900/30' : 'bg-blue-50/30'} p-6 flex flex-col items-center justify-center text-center mb-2 min-h-[140px] shadow-sm border ${isDarkMode ? 'border-blue-900/30' : 'border-blue-100/50'} transition-colors`}>
         <h2 className={`text-base md:text-lg font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} leading-relaxed tracking-tight`}>
           {question?.question || 'Carregando questão...'}
         </h2>
      </div>

      {/* OPÇÕES - COM FEEDBACK VISUAL IMEDIATO */}
      <div className={`w-full ${question.options.length === 2 ? 'grid grid-cols-2 gap-4' : 'space-y-3'} mb-6`}>
        {question.options.map((opt, i) => {
          const isSelected = selectedOption === opt;
          const isCorrectAnswer = opt === question.answer;
          
          let buttonClass = isDarkMode 
            ? "bg-slate-900 border-slate-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/20"
            : "bg-white border-slate-200 hover:border-blue-400 hover:shadow-md";
          
          let badgeClass = isDarkMode
            ? "bg-slate-800 border-slate-700 text-white group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
            : "bg-slate-50 border-slate-100 text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600";
          
          if (isSelected) {
            if (isCorrectAnswer) {
              buttonClass = isDarkMode
                ? "bg-green-950/30 border-green-500 shadow-lg shadow-green-900/20 ring-2 ring-green-900/20"
                : "bg-green-50 border-green-500 shadow-lg shadow-green-100 ring-2 ring-green-100";
              badgeClass = "bg-green-600 text-white border-green-600";
            } else {
              buttonClass = isDarkMode
                ? "bg-red-950/30 border-red-500 shadow-lg shadow-red-900/20 ring-2 ring-red-900/20"
                : "bg-red-50 border-red-500 shadow-lg shadow-red-100 ring-2 ring-red-100";
              badgeClass = "bg-red-600 text-white border-red-600";
            }
          } else if (selectedOption && isCorrectAnswer) {
            buttonClass = isDarkMode
              ? "bg-green-950/20 border-green-900/30 opacity-70"
              : "bg-green-50 border-green-200 opacity-80";
            badgeClass = "bg-green-500 text-white border-green-500";
          }

          return (
            <motion.button
              key={i}
              whileHover={!selectedOption ? { scale: 1.01 } : {}}
              whileTap={!selectedOption ? { scale: 0.99 } : {}}
              disabled={!!selectedOption}
              onClick={() => onAnswer(opt)}
              className={`w-full p-4 flex items-center gap-4 border transition-all group ${buttonClass} relative overflow-hidden`}
            >
              <span className={`${question.options.length === 2 ? 'w-10 h-10 text-sm mb-2' : 'w-8 h-8 text-[11px]'} border flex items-center justify-center font-black transition-all shrink-0 ${badgeClass}`}>
                {String.fromCharCode(64 + (i + 1))}
              </span>
              <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-700'} flex-1 group-hover:text-blue-500 transition-colors uppercase tracking-tight leading-snug text-left`}>{opt}</span>
            </motion.button>
          );
        })}
      </div>

      {!selectedOption && (
        <div className="w-full pt-2">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc' }}
            whileTap={{ scale: 0.98 }}
            onClick={onSkip}
            className={`w-full py-3 border-2 ${isDarkMode ? 'border-slate-700 text-white' : 'border-slate-200 text-slate-400'} font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:text-slate-400 hover:border-slate-700 transition-all shadow-sm ${isDarkMode ? 'bg-slate-950/50' : 'bg-white/50'}`}
          >
            <div className={`w-1.5 h-1.5 ${isDarkMode ? 'bg-blue-600' : 'bg-slate-300'} rounded-full`}></div>
            Pular Questão
            <div className={`w-1.5 h-1.5 ${isDarkMode ? 'bg-blue-600' : 'bg-slate-300'} rounded-full`}></div>
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};
