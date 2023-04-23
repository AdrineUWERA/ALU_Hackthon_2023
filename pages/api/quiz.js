// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../server/helpers/prisma";
import { searchEngine } from "../../server/service/openai";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { topic } = req.body;
      const modelPrompt = `Create a 5 multiple choice questions quiz based on these topics and return in json format: ${topic}`;

      const result = await searchEngine(modelPrompt);
      console.log(result.data.choices[0]);
      return res.status(200).json(JSON.parse(result.data.choices[0].text));
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    res.status(500).send("Undefined Request Method");
  }
}
