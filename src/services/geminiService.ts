import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function checkGrammar(text: string): Promise<string> {
  if (!text || text.trim().length === 0) return "";

  try {
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
