import React from 'react';

const MessageParser = ({ children, actions }) => {
  // process incoming message
  const parse = async (message) => {

      await actions.sendMessage(message);
    
    
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions
        });
      })}
    </div>
  );
};

export default MessageParser;