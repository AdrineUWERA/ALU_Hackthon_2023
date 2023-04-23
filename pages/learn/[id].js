import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { FaRobot } from 'react-icons/fa';
import ActionProvider from "../../src/chatbot/actionProvider";
import config from "../../src/chatbot/config";
import MessageParser from "../../src/chatbot/messageParser";


const courseContent = () => {
    const [showBot, setShowBot] = React.useState(false);
    const [course, setCourse] = useState(null);
    const [content, setContent] = useState(null);
    const [contentTitle, setContentTitle] = useState(null);
    const router = useRouter();

    const id = router.query.id;
    console.log("id ", router.query)


    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        const result = await fetch(`http://localhost:3000/api/content/${id}`);
        const json = await result.json();
        setCourse(json);
    };
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const regenerateContent = async (level) => {
        const result = await fetch('http://localhost:3000/api/regenerate', {
            method: 'POST',
            body: JSON.stringify({"content": content, "level":level }),
            headers: { 'Content-Type': 'application/json' }
        });
        const json = await result.json();
        if(json.text !== ""){
            setContent(json.text);
        }
        toggleMenu()
    };  

    const summarizeContent = async (level) => {
        const result = await fetch('http://localhost:3000/api/summarize', {
            method: 'POST',
            body: JSON.stringify({"prompt": content}),
            headers: { 'Content-Type': 'application/json' }
        });
        const json = await result.json();
        if(json.text !== ""){
            setContent(json.text);
        }
        toggleMenu()
    }; 

    const regenerateFunction = async (level) => {
        if(level === 'summarize'){

        }else{
            regenerateContent(level)
        }

    }
    
    const [isHidden, setIsHidden] = useState(true);

//   const toggleHiddenClass = () => {
//     setIsHidden(!isHidden);
//   };
    
const [selectedTopic, setSelectedTopic] = useState(0);

  function toggleDropdown(index) {
    if(selectedTopic === index){
        setSelectedTopic(null);
    }else{
    setSelectedTopic(index);
    // setIsHidden(!isHidden);
    }
  }

  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

//   let content = '';
//   let content_title = '';
  function getContent(){
    for(let i = 0; i< course.topics.length; i++){
        if(course.topics[i].id === selectedTopic){
            let courseSubTopics = course.topics[i].subTopics
            for(let j = 0; j< courseSubTopics.length; j++){
                if(courseSubTopics[j].id === selectedMenuItem){
                    setContent(courseSubTopics[j].content);
                    setContentTitle(courseSubTopics[j].title);
                }
            }
        }
    }
  }

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    getContent();
  };
  return (
    <div className='parent'>
              {course ? (
              <><button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
              </button><aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                          <ul class="space-y-2 font-medium">
                              {course.topics.map((topic, index) => (
                                  <li key={course.id}>
                                      <button type="button" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" data-collapse-target="#dropdown-example" onClick={() => toggleDropdown(topic.id)}>
                                          <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{topic.name}</span>
                                          <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                      </button>
                                      {selectedTopic === topic.id
                                          && (
                                              <ul id="dropdown-example" class="py-2 space-y-2">
                                                  {topic.subTopics.map((subtopic, index) => (
                                                      <li key={index}>
                                                          <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100" onClick={() => handleMenuItemClick(subtopic.id)}>{subtopic.title}</a>

                                                      </li>
                                                  ))}
                                              </ul>
                                          )}
                                  </li>

                              ))}
                          </ul>
                          </div>
                          </aside>
                          <div id="main_content" className="p-4 sm:ml-64">
                              <div class="p-4 border-2 border-grey-600 rounded-lg">
                                  <div class="container mx-auto px-4">
                                  <div class="flex justify-end">
                                    <button class="inline-flex gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-4">Practice Quiz</button>
                                    <div class="relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={toggleMenu}>
      Adjust Content
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  {isMenuOpen && (
  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0" onClick={() => regenerateFunction('beginner')}>Beginner friendly</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1" onClick={() => regenerateFunction('intermediate')}>Intermediate level</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" onClick={() => regenerateFunction('advanced')}>Advanced level</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" onClick={() => regenerateFunction('summarize')}>Summarize Content</a>
    </div>
  </div>
  )}
</div>
                                </div>
                                      <h1 class="text-4xl font-bold text-gray-900 mt-8 mb-4">{contentTitle}</h1>
                                      <div class="py-4">
                                          {content}
                                      </div>
                                  </div>
                              </div>
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
                      </div>
                  </>):(
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default courseContent;
