import React from 'react';
import { motion } from 'motion/react';
import { Gamepad2, ArrowRight, Sparkles } from 'lucide-react';
import { Difficulty, Banca } from '../types';

interface WelcomeProps {
  isDarkMode: boolean;
  questionCount: number;
  banca: Banca;
  difficulty: Difficulty;
  onConfirm: () => void;
}

export const WelcomeScreen: React.FC<WelcomeProps> = ({ isDarkMode, questionCount, banca, difficulty, onConfirm }) => {
  return (
    <motion.div 
      key="welcome-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="flex-1 flex flex-col items-center justify-center px-10 text-center relative"
    >
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-blue-950/30 to-slate-950' : 'bg-gradient-to-b from-blue-50/50 to-white'} -z-10`}></div>
      
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full scale-150"></div>
        <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/10">
          <Gamepad2 size={40} className="text-white" />
        </div>
      </div>

      <h1 className={`text-4xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-2 uppercase tracking-tighter leading-none`}>
        BOA <span className="text-blue-600">SORTE!</span>
      </h1>
      
      <div className={`mb-10 p-4 ${isDarkMode ? 'bg-slate-900/50' : 'bg-blue-50/50'} border ${isDarkMode ? 'border-slate-800' : 'border-blue-100'} backdrop-blur-sm`}>
        <p className={`text-[11px] ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-bold leading-relaxed uppercase tracking-wider`}>
          Você escolheu <span className="text-blue-600">{questionCount}</span> questões da banca <span className="text-blue-600">{banca}</span> no nível <span className="text-blue-600">{difficulty}</span>.
        </p>
      </div>

      <div className="space-y-4 w-full">
        <div className="flex items-center gap-3 text-[9px] font-black text-slate-500 uppercase tracking-widest justify-center">
          <Sparkles size={14} className="text-yellow-500" />
          Mantenha o foco e a calma
        </div>
        
        <button 
          onClick={onConfirm}
          className="w-full bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white font-black py-6 shadow-2xl transition-all active:scale-[0.98] uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-3"
        >
          COMEÇAR AGORA
          <ArrowRight size={20} strokeWidth={3} />
        </button>
      </div>

      <p className={`mt-8 text-[8px] ${isDarkMode ? 'text-slate-600' : 'text-slate-400'} font-black uppercase tracking-widest`}>
        PREPARADO POR SIMULADOPRO AI
      </p>
    </motion.div>
  );
};
