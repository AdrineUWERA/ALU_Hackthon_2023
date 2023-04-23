import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [socket, setSocket] = React.useState(null);
  // message trigger
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. How can I help you!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const socketMessage = (message) => {
    const msgTemplate = {
      messages: [
          {
              role: "user",
              content: message
          }
      ]
  }
  socket.send(JSON.stringify(`${msgTemplate}`))
  
  }

  // fetch post request to server
  const sendMessage = async (message) => {
    try {
      const msgTemplate = {
        messages: [
            {
                role: "user",
                content: message
            }
        ]
    }
      const response = await fetch('/api/chat',{
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST", 
        body: JSON.stringify(msgTemplate)
      } )
      const data = await response.json();
      const botMessage = createChatBotMessage(data.message.content);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
      return data;

    } catch (error) {
      console.warn(error)
    }
  }

  // call the chat GPT API
  const handleChatGpt = () => {
    

  }

  const handleCustomWidget = () => {
    const botMessage = createChatBotMessage('Here is a custom widget!', {widget: 'customWidget'})
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }


React.useEffect(() => {
    const ws = new WebSocket('wss://localhost:8080');

    ws.onopen = function () {
      console.log('WebSocket connection established');
      ws.send("sending you connects1---------")
    };

    // ws.onmessage = function (event) {
    //   console.log('WebSocket message received:', event.data);
    // };

    ws.addEventListener('message', (event) => {
      console.log('WebSocket message received2:', event.data);
    })

    ws.onclose = function () {
      console.log('WebSocket connection closed');
    };
    setSocket(ws)
    return () => {
      ws.close();
    };
  }, []);

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello, 
            handleCustomWidget,
            socketMessage,
            sendMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;