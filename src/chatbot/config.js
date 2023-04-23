import { createChatBotMessage } from 'react-chatbot-kit';
import Bot from '../components/UI/Bot';

const botName = 'InterLearn Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}, how can I help you?`)],
  widgets: [
    {
        widgetName: 'customWidget',
        widgetFunc: (props) => <div style={{ backgroundColor: 'black', padding: "5px", color: "white" }}>custom widget</div>,
      },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#4f46e5',
    },
    chatButton: {
      backgroundColor: '#4f46e5',
    },
  },
  customComponents: {
    // Replaces the default header
    // header: () => <div style={{ backgroundColor: 'black', padding: "5px", color: "white" }}>{botName}</div>,
    // Replaces the default bot avatar
    botAvatar: (props) => <Bot />,
  }
};

export default config;