import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined. Please configure it in your environment.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function checkGrammar(text: string): Promise<string> {
  if (!text || text.trim().length === 0) return "";

  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analise as justificativa de resposta de um aluno abaixo. Verifique a ortografia e a gramática em português. 
      Se houver erros, corrija-os e explique brevemente por que a correção foi feita. 
      Se o texto estiver correto, apenas elogie o aluno.
      
      Texto do aluno: "${text}"`,
      config: {
        systemInstruction: "Você é um professor assistente especializado em língua portuguesa e gramática normativa. Sua função é corrigir erros de ortografia e gramática de forma encorajadora e didática.",
        temperature: 0.7,
      },
    });

    return response.text || "Não foi possível analisar o texto no momento.";
  } catch (error) {
    console.error("Erro ao chamar o Gemini:", error);
    return "Erro na conexão com o assistente de correção.";
  }
}
