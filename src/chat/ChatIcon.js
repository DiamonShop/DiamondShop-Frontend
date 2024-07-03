// src/ChatIcon.js
import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import './ChatIcon.css'

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <a href="https://m.me/337606799444520" target="_blank"> 
      <img
        src="assets/img/messenger.jpg" // Đường dẫn tới hình ảnh của bạn

        alt="Chat Icon"
        className="chat-icon"
        onClick={toggleChat}
      />
      </a>
    </div>
  );
};

export default ChatIcon;
