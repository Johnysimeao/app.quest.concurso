import { createClient } from '@supabase/supabase-js';

// Tenta pegar das variáveis de ambiente, ou usa o que foi deduzido do token
const rawUrl = import.meta.env.VITE_SUPABASE_URL || 'https://oulcsebvrarfmsxljbbb.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validação básica de URL para evitar o erro "Invalid supabaseUrl"
const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return url.startsWith('http');
  } catch {
    return false;
  }
};

const supabaseUrl = isValidUrl(rawUrl) ? rawUrl : 'https://oulcsebvrarfmsxljbbb.supabase.co';

if (!supabaseKey || supabaseKey === 'your_anon_key_here') {
  console.warn('Supabase Anon Key is missing or invalid. Please check your .env file.');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey || 'placeholder-key'
);
