import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Info, MessageSquareQuote, User, Sparkles, ArrowRight } from 'lucide-react';
import { Question } from '../types';

interface FeedbackProps {
  isDarkMode: boolean;
  isCorrect: boolean | null;
  selectedOption: string | null;
  feedbackText: string;
  question: Question;
  justification: string;
  setJustification: (val: string) => void;
  grammarFeedback: string | null;
  setGrammarFeedback: (val: string | null) => void;
  checkingGrammar: boolean;
  onGrammarCheck: () => void;
  onNext: () => void;
}

export const FeedbackScreen: React.FC<FeedbackProps> = ({
  isDarkMode,
  isCorrect,
  selectedOption,
  feedbackText,
  question,
  justification,
  setJustification,
  grammarFeedback,
  setGrammarFeedback,
  checkingGrammar,
  onGrammarCheck,
  onNext
}) => {
  return (
    <motion.div 
      key="feedback-main"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="flex-1 flex flex-col h-full overflow-hidden"
    >
      <div className={`p-8 ${isCorrect ? 'bg-green-600' : (selectedOption === '__SKIPPED__' ? 'bg-slate-700' : 'bg-red-600')} text-white flex flex-col items-center justify-center text-center shadow-xl relative`}>
        <div className="absolute top-0 right-0 w-32 h-full bg-white/10 skew-x-[-20deg] translate-x-16"></div>
        {isCorrect ? <CheckCircle2 size={48} className="mb-4" /> : <XCircle size={48} className="mb-4" />}
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">{feedbackText}</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6 scrollbar-hide">
        <div className={`p-5 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'} border ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} mb-6`}>
           <div className="flex items-center gap-2 mb-4">
              <div className={`${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'} p-1.5`}>
                <MessageSquareQuote size={12} className="text-slate-400" />
              </div>
              <span className={`text-[9px] font-black ${isDarkMode ? 'text-white' : 'text-slate-400'} uppercase tracking-[0.2em]`}>ANÁLISE DO PROFESSOR</span>
           </div>
           
           <div className={`text-xs font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-600'} leading-relaxed overflow-y-auto pr-2 scrollbar-hide mb-4`}>
             {question.explanation}
           </div>

           {/* ÁREA DE ANOTAÇÕES DO ALUNO COM VERIFICAÇÃO GRAMATICAL */}
           <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} flex flex-col gap-3`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'} p-1.5`}>
                    <User size={12} className="text-slate-400" />
                  </div>
                  <span className={`text-[9px] font-black ${isDarkMode ? 'text-white' : 'text-slate-400'} uppercase tracking-[0.2em]`}>SUA JUSTIFICATIVA</span>
                </div>
                
                <button 
                  type="button"
                  onClick={onGrammarCheck}
                  disabled={checkingGrammar || !justification.trim()}
                  className={`text-[8px] font-black uppercase px-2 py-1 transition-all ${checkingGrammar ? 'opacity-50' : 'hover:text-blue-500'} ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                >
                  {checkingGrammar ? 'ANALISANDO...' : (grammarFeedback ? 'REANALISAR' : 'VERIFICAR ESCRITA')}
                </button>
              </div>

              <textarea
                value={justification}
                onChange={(e) => {
                  setJustification(e.target.value);
                  if (grammarFeedback) setGrammarFeedback(null);
                }}
                placeholder="Escreva aqui seu raciocínio sobre esta questão..."
                className={`w-full h-24 p-3 text-[11px] font-medium transition-all focus:ring-1 focus:ring-blue-500 outline-none resize-none ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-100 text-slate-600'} border`}
              />

              {grammarFeedback && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-3 rounded-none border-l-2 border-blue-500 ${isDarkMode ? 'bg-blue-950/20 text-slate-400' : 'bg-blue-50 text-slate-600'} text-[10px] italic`}
                >
                  <div className="font-black text-blue-500 mb-1 flex items-center gap-1">
                    <Sparkles size={10} />
                    FEEDBACK GRAMATICAL:
                  </div>
                  {grammarFeedback}
                </motion.div>
              )}
           </div>
        </div>

        <button 
          onClick={onNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3"
        >
          PRÓXIMA QUESTÃO
          <ArrowRight size={18} strokeWidth={3} />
        </button>
      </div>
    </motion.div>
  );
};
