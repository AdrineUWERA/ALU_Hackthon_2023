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