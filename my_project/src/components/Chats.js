import React, { useState, useEffect, useRef  } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

import '../styles/Chat.css'; // Import the CSS file

function Chats() {
  const [chatVisible, setChatVisible] = useState(false);

  const chatBoxRef = useRef();

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };


      // Close the chat box when clicking outside
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
            setChatVisible(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);


  // Define the handleSendMessage function
  const handleSendMessage = () => {
    // Implement the logic to send messages here
    console.log('Message sent!'); // For example, log a message
  };

  return (
    <div>
      <Box className="box">
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          className="speedDial" // Apply the CSS class here
          icon={< ChatBubbleRoundedIcon onClick={toggleChat} />}
        />
      </Box>

      {chatVisible && (
        <div className="chatbotCard" ref={chatBoxRef}>
          <header>
            <h2>LETS CHAT</h2>
          </header>
          <div className="chatbox">
            <div className="chat incoming">
            <SmartToyOutlinedIcon className="icon-margin-01" /><p> Hi there 👋.How can I help you today?</p>
            </div>
            <div className="chat outgoing">
              <p>Hi hansi</p><AccountCircleRoundedIcon className="icon-margin-02" />
             
            </div>
          </div>

      <div class="chat-input">
        <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
        
        <SendRoundedIcon onClick={handleSendMessage} className="send-icon" />
      
      </div>
        </div>
      )}
    </div>
  );
}

export default Chats;
