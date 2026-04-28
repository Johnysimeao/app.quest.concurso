import React from 'react';
import { motion } from 'motion/react';
import { Trophy, RotateCcw } from 'lucide-react';

interface ResultProps {
  isDarkMode: boolean;
  score: number;
  total: number;
  onReset: () => void;
}

export const ResultScreen: React.FC<ResultProps> = ({ isDarkMode, score, total, onReset }) => {
  const percentage = Math.round((score / total) * 100);
  
  return (
    <motion.div 
      key="result-screen"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex-1 flex flex-col items-center justify-center px-10 text-center"
    >
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-blue-900/40 to-slate-950' : 'bg-gradient-to-b from-blue-100/50 to-white'} -z-10`}></div>
      
      <div className="relative mb-8">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center shadow-2xl relative z-10"
        >
          <Trophy size={64} className="text-white" />
        </motion.div>
        <div className="absolute inset-0 bg-yellow-500/30 blur-3xl animate-pulse rounded-full"></div>
      </div>

      <h2 className={`text-4xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-2 uppercase tracking-tighter italic`}>
        FIM DO <span className="text-blue-600">TREINO!</span>
      </h2>
      
      <div className="flex flex-col items-center mb-10">
        <span className={`text-[10px] ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} font-bold uppercase tracking-[0.4em] mb-2`}>SEU DESEMPENHO</span>
        <div className="text-6xl font-black text-blue-600 leading-none mb-1">{percentage}%</div>
        <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-bold uppercase tracking-widest`}>
          Você acertou {score} de {total} questões
        </div>
      </div>

      <button 
        onClick={onReset}
        className="w-full bg-slate-900 dark:bg-blue-600 hover:bg-black dark:hover:bg-blue-500 text-white font-black py-5 shadow-2xl transition-all active:scale-[0.98] uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3"
      >
        <RotateCcw size={18} strokeWidth={3} />
        NOVO SIMULADO
      </button>
      
      <p className={`mt-10 text-[8px] ${isDarkMode ? 'text-slate-600' : 'text-slate-400'} font-black uppercase tracking-[0.2em] max-w-[200px]`}>
        "O sucesso é a soma de pequenos esforços repetidos dia após dia."
      </p>
    </motion.div>
  );
};
