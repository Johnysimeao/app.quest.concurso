import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit } from 'lucide-react';

interface LoadingProps {
  isDarkMode: boolean;
}

export const LoadingScreen: React.FC<LoadingProps> = ({ isDarkMode }) => {
  return (
    <motion.div 
      key="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col items-center justify-center px-10 text-center"
    >
      <div className="relative mb-8">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-blue-600/30' : 'bg-blue-600/20'} blur-2xl rounded-full scale-150 animate-pulse`}></div>
        <BrainCircuit size={64} className="text-blue-600 relative z-10 animate-bounce" />
      </div>
      
      <h2 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-2 uppercase tracking-tighter`}>
        PREPARANDO <span className="text-blue-600">QUESTÕES</span>
      </h2>
      <div className="flex items-center gap-2 mb-6">
         <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
         <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
         <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
      </div>

      <p className={`text-[10px] ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} font-bold uppercase tracking-[0.3em] max-w-[200px] leading-relaxed`}>
        Refinando algoritmos e filtrando o melhor conteúdo para você.
      </p>
    </motion.div>
  );
};
