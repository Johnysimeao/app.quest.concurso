import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, ChevronRight, ArrowRight } from 'lucide-react';
import { Difficulty, Banca } from '../types';

interface SelectionProps {
  type: 'LEVEL' | 'BANCA' | 'COUNT';
  isDarkMode: boolean;
  onSelect: (val: any) => void;
  onBack?: () => void;
  selecting: any;
  difficulty?: Difficulty;
  banca?: Banca;
  playSound: (type: 'SELECT' | 'CORRECT' | 'WRONG' | 'ERROR') => void;
}

export const SelectionScreen: React.FC<SelectionProps> = ({ 
  type, 
  isDarkMode, 
  onSelect, 
  onBack, 
  selecting,
  difficulty,
  banca,
  playSound
}) => {
  const getHeader = () => {
    switch (type) {
      case 'LEVEL': return { title: 'SIMULADO PRO', subtitle: 'PASSO 1: ESCOLHA O NÍVEL', icon: <BrainCircuit size={48} className="text-blue-600" /> };
      case 'BANCA': return { title: 'BANCA EXAMINADORA', subtitle: 'PASSO 2: FILTRAR POR INSTITUIÇÃO', icon: <BrainCircuit size={48} className="text-blue-600" /> };
      case 'COUNT': return { title: 'DEFINA A QUANTIDADE', subtitle: 'PASSO FINAL: ESCOLHA O NÚMERO DE QUESTÕES', icon: <BrainCircuit size={48} className="text-blue-600" /> };
    }
  };

  const { title, subtitle, icon } = getHeader();

  const options = type === 'LEVEL' ? ['Fácil', 'Médio', 'Difícil'] : 
                  type === 'BANCA' ? ['Geral', 'FGV', 'CESPE', 'FCC', 'Vunesp'] :
                  [10, 15, 20, 25];

  return (
    <motion.div 
      key={`select-${type.toLowerCase()}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-1 flex flex-col items-center justify-center px-10 text-center relative"
    >
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-blue-950/30 to-slate-950' : 'bg-gradient-to-b from-blue-50/50 to-white'} -z-10`}></div>
      
      {onBack && (
        <button 
          onClick={onBack}
          className={`absolute top-12 left-8 flex items-center gap-2 text-[8px] font-black ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} uppercase tracking-widest hover:text-blue-600 transition-colors`}
        >
          <ArrowRight size={12} className="rotate-180" /> VOLTAR
        </button>
      )}

      {type === 'LEVEL' && (
        <div className="absolute top-12 right-8 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className={`text-[8px] font-black ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} uppercase tracking-widest`}>
              ONLINE
            </span>
          </div>
        </div>
      )}

      <div className="mb-4">{icon}</div>
      
      <h1 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-1 uppercase tracking-tight leading-none`}>
        {title.split(' ')[0]} <span className="text-blue-600">{title.split(' ').slice(1).join(' ')}</span>
      </h1>
      <p className={`text-[8px] ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} mb-8 font-bold uppercase tracking-[0.4em]`}>
        {subtitle}
      </p>
      
      <div className={`w-full ${type === 'COUNT' ? 'grid grid-cols-2 gap-3' : 'space-y-2'}`}>
        {options.map((opt: any) => {
          const isBeingSelected = selecting === opt;
          
          if (type === 'COUNT') {
            return (
              <button
                key={opt}
                onClick={() => onSelect(opt)}
                className={`w-full group ${isDarkMode ? 'bg-slate-900 hover:bg-blue-600' : 'bg-white hover:bg-blue-600'} py-8 flex flex-col items-center justify-center transition-all active:scale-[0.98] shadow-sm border ${isDarkMode ? 'border-slate-800' : 'border-slate-50'}`}
              >
                <span className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'} group-hover:text-white`}>{opt}</span>
                <span className={`text-[9px] font-black ${isDarkMode ? 'text-slate-400' : 'text-slate-400'} group-hover:text-white/60 uppercase tracking-[0.2em]`}>QUESTÕES</span>
              </button>
            );
          }

          return (
            <motion.button
              key={opt}
              disabled={selecting !== null}
              onClick={() => onSelect(opt)}
              animate={{
                scale: isBeingSelected ? 1.02 : 1,
                backgroundColor: isBeingSelected ? '#2563eb' : (isDarkMode ? '#0f172a' : '#ffffff'),
                borderColor: isBeingSelected ? '#2563eb' : (isDarkMode ? '#1e293b' : '#f8fafc')
              }}
              whileHover={!selecting ? { scale: 1.01, backgroundColor: '#2563eb', borderColor: '#2563eb' } : {}}
              whileTap={!selecting ? { scale: 0.98 } : {}}
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
                isBeingSelected ? 'text-white' : (isDarkMode ? 'text-white' : 'text-slate-700') + ' group-hover:text-white'
              }`}>{opt}</span>
              
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
  );
};
