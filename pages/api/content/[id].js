// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../../server/helpers/prisma";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const { id } = req.query;
    const data = await prisma.course.findUnique({
      include: { topics: { include: { subTopics: true } } },
      where: { id: id },
    });
    res.status(200).json(data);
  } else {
    res.status(500).send("Undefined Request Method");
  }
}
