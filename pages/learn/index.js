import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { FaRobot } from 'react-icons/fa';
import ActionProvider from "../../src/chatbot/actionProvider";
import config from "../../src/chatbot/config";
import MessageParser from "../../src/chatbot/messageParser";
import CourseMenu from '../../src/components/CourseMenu';
import Footer from '../../src/components/Footer';
import NavBar from './../../src/components/Navbar';

const Courses = () => {
  const [showBot, setShowBot] = React.useState(false);
  return (
    <div>
      <React.Fragment>
        <NavBar/> 
        <CourseMenu/>
        <Footer/>
        {showBot && <div className='fixed right-12 bottom-[114px]'>
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
        </div>}

        <div className='w-50 h-50 rounded-full bg-black p-4 fixed right-12 bottom-12 cursor-pointer' onClick={() => setShowBot(!showBot)}>
          <FaRobot className='text-white text-3xl'/>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Courses;
