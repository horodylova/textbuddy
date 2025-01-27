import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const fetchHumanizedText = async (prompt) => {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 3000,
    temperature: 0.7,
  });

  return response.data.choices[0].message.content.trim();
};

export default fetchHumanizedText;


