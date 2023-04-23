// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../server/helpers/prisma";
import { searchEngine } from "../../server/service/openai";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { prompt } = req.body;
      const modelPrompt = `Summarize the following content: ${prompt}`;

      const result = await searchEngine(modelPrompt);
      console.log(result.data.choices[0]);
      return res.status(200).json(result.data.choices[0]);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } else {
    res.status(500).send("Undefined Request Method");
  }
}
