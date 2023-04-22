import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);
export const searchEngine = async (prompt) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.2,
      max_tokens: 2048
    });
    return response
}

export const chatEngine = async (messages) => {
  const response = await openai.createChatCompletion({
    model: "text-davinci-003",
    messages,
    temperature: 0.2,
    max_tokens: 2048
  });
  return response
}

export const contentGenerationEngine = async (topic, level) => {
  const prompt = `
  You should return content on the given topic below as it would be in learning books
  that would be understandable by a ${level}

  ${topic}
  `;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.2,
    max_tokens: 2048
  });
  return response
}