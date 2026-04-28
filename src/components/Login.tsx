import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Lock, Mail, Eye, EyeOff, Sun, Moon, ArrowRight } from 'lucide-react';

interface LoginProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onLogin: (username: string) => void;
  playSound: (type: 'SELECT' | 'CORRECT' | 'WRONG' | 'ERROR') => void;
}

export const Login: React.FC<LoginProps> = ({ isDarkMode, setIsDarkMode, onLogin, playSound }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    if (!username || !password) {
      setError('PREENCHA TODOS OS CAMPOS');
      return;
    }
    
    if (password.toLowerCase() !== 'aprovação') {
      setError('SENHA INCORRETA');
      playSound('ERROR');
      return;
    }

    onLogin(username);
  };

  return (
    <motion.div 
      key="login-screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className={`flex-1 flex flex-col items-center justify-center px-10 text-center relative ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-blue-950/30 to-slate-950' : 'bg-gradient-to-b from-blue-50/50 to-white'} -z-10`}></div>
      
      <div className="mb-8">
        <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20 rotate-3 mx-auto">
          <Lock size={32} className="text-white" />
        </div>
      </div>

      <h1 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-2 uppercase tracking-tight`}>
        ÁREA DO <span className="text-blue-600">ALUNO</span>
      </h1>
      <p className={`text-[10px] ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} mb-8 font-bold uppercase tracking-[0.3em]`}>
        ENTRE COM SEUS DADOS
      </p>

      <div className="w-full space-y-3 mb-6">
        <div className="relative">
          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text"
            placeholder="SEU NOME"
            value={username}
            onChange={e => {
              setUsername(e.target.value.toUpperCase());
              setError(null);
            }}
            className={`w-full py-4 pl-12 pr-4 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600' : 'bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-400'} border font-bold text-base tracking-widest focus:outline-none focus:border-blue-600 transition-colors uppercase`}
          />
        </div>
        <div className="relative">
          <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type={showPassword ? "text" : "password"}
            placeholder="SENHA DE ACESSO"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
              setError(null);
            }}
            className={`w-full py-4 pl-12 pr-12 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600' : 'bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-400'} border font-bold text-base tracking-widest focus:outline-none focus:border-blue-600 transition-colors uppercase`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 transition-colors"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full bg-red-500/10 border border-red-500/20 py-3 mb-6 flex items-center justify-center gap-2"
          >
            <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">
              {error}
            </span>
            <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2 w-full mb-8">
        <button 
          onClick={() => setIsDarkMode(false)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 border-2 transition-all ${!isDarkMode ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-transparent border-slate-200 text-slate-400 hover:border-slate-300'}`}
        >
          <Sun size={14} strokeWidth={3} />
          <span className="text-[10px] font-black uppercase tracking-widest">Claro</span>
        </button>
        <button 
          onClick={() => setIsDarkMode(true)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 border-2 transition-all ${isDarkMode ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-transparent border-slate-200 text-slate-400 hover:border-slate-300'}`}
        >
          <Moon size={14} strokeWidth={3} />
          <span className="text-[10px] font-black uppercase tracking-widest">Escuro</span>
        </button>
      </div>

      <button 
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] uppercase tracking-widest text-xs flex items-center justify-center gap-3"
      >
        ENTRAR NO SISTEMA
        <ArrowRight size={18} strokeWidth={3} />
      </button>
    </motion.div>
  );
};
