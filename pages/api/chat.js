// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { chatEngine } from "../../server/service/openai";

// import WebSocket from 'ws';

// const ws = new WebSocket.Server({ port: 8080 });

// ws.on('connection', function connection(ws) {
//   console.log('WebSocket client connected');

//   ws.on('message', async function incoming(message) {
//     // ws.send("Back again") // not working
//     // console.log('WebSocket message received1:-----', JSON.parse(message));
//     console.log(JSON.parse(message))
//     // const result = await chatEngine(messages);
//     // console.log(result?.data.choices[0]);
//   });

//   ws.on('close', function close() {
//     console.log('WebSocket client disconnected');
//   });
// });


export default async function handler(req, res) {
  if (req.method == "GET") {
    res.status(200).json("HELLOOO");
  } else if (req.method == "POST") {
    try {
      console.info('Client connected')
      // res.setHeader('Content-Type', 'text/event-stream')
      // res.setHeader('Access-Control-Allow-Origin', '*')

      const { messages } = req.body;
      console.log(messages)
      const result = await chatEngine(messages);
      console.log(result.data)
      console.log(result?.data.choices[0]);

     // send(res)

      // res.on("searchEngine", async (messages) => {
      //   const { messages } = req.body;
      //   const result = await chatEngine(messages);
      //   console.log(result.data.choices[0]);
      //   res.write(`data: ${result.data.choices[0]} \n\n`)
      // })

      // res.on("close", async () => {
      //   console.warn("Client closed")
      //   res.end()
      // })
      return res.status(200).json(result?.data.choices[0]);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
  } else {
    res.status(500).send("Undefined Request Method");
  }
}

function send(res) {
  res.write(`data: ${"Hello from server"} \n\n`)
  setTimeout(() => send(res), 1000)

}
