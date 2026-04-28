export type Difficulty = 'Fácil' | 'Médio' | 'Difícil';
export type Banca = 'FGV' | 'CESPE' | 'FCC' | 'Vunesp' | 'Geral';

export interface Question {
  id: number;
  difficulty: Difficulty;
  banca?: Banca;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export type GameState = 'LOGIN' | 'SELECT_LEVEL' | 'SELECT_BANCA' | 'SELECT_COUNT' | 'LOADING' | 'WELCOME' | 'QUIZ' | 'FEEDBACK' | 'RESULT';
