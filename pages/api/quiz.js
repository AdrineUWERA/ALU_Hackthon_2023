// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../server/helpers/prisma";
import { searchEngine } from "../../server/service/openai";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { topic } = req.body;
      console.log(topic);
      const modelPrompt = `Create a 5 multiple choice questions quiz on ${topic} and return an array of question objects in json format where each question has property question, options (an object of 4 choices with keys in small letters), and answer (a key of the correct option in the options object).`;

      const result = await searchEngine(modelPrompt);
      console.log(result.data.choices[0]);
      return res.status(200).json(JSON.parse(`${result.data.choices[0].text}`));
    } catch (error) {
      // console.log(error);
      return res.status(500).json(error);
    }
  } else {
    res.status(500).send("Undefined Request Method");
  }
}
