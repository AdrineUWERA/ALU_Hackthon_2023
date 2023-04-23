import Link from 'next/link'
import React, { useState, useEffect } from "react";


const courseContent = () => {

    const [course, setCourse] = useState(null);
    const [content, setContent] = useState(null);
    const [contentTitle, setContentTitle] = useState(null);


    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        const result = await fetch('http://localhost:3000/api/content/64447b33f68eb82f01b7a3f6');
        const json = await result.json();
        setCourse(json);
    };   
    
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
        console.log(i)
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
                              <div class="p-4 border-2 border-indigo-600 rounded-lg">
                                  <div class="container mx-auto px-4">
                                      <h1 class="text-4xl font-bold text-gray-900 mt-8 mb-4">{contentTitle}</h1>
                                      <div class="py-4">
                                          {content}
                                      </div>
                                  </div>
                              </div>
                      </div>
                  </>):(
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default courseContent;
