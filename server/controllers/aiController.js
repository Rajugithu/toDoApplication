import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function enhanceText(req, res) {
  const { text } = req.body;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    // Updated prompt for concise output
    const prompt = `Rewrite the following text to improve it and only return the improved text, without any explanation or introductory phrases: "${text}"`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json({ result: response.text() });
  } catch (err) {
    console.error("AI Error:", err);
    res.status(500).json({ error: "AI service unavailable" });
  }
}