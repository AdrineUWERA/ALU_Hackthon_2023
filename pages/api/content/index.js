// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../../server/helpers/prisma";
import { contentGenerationEngine } from "../../../server/service/openai";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const data = await prisma.course.findMany({
      include: { topics: { include: { subTopics: true } } },
    });
    res.status(200).json(data);
  } else if (req.method == "POST") {
    try {
      const { topic, level } = req.body;
      const result = await contentGenerationEngine(topic, level);
      console.log(result.data.choices[0]);
      return res.status(200).json(result.data.choices[0]);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    res.status(500).send("Undefined Request Method");
  }
}
