// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log(req)
  if(req.method == 'GET') {
    const data = await prisma.questions.create({
     data: {
      name: "testing"
     }
    })
    res.status(200).json(data)
  } else {
    res.status(500).send("Undefined Request Method")
  }
}
