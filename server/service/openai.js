import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const searchEngine = async (prompt) => {
try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 0.2,
        max_tokens: 2048
      });
      return response
} catch (error) {
  console.log(error);
  
}
}

export const chatEngine = async (messages) => {
    try {
        
        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages,
          temperature: 0.2,
          max_tokens: 2048
        });
        return response
    } catch (error) {
        return error
    }
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