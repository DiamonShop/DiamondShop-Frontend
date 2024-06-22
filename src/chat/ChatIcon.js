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
      <img
        src="assets/img/mess.jpg" // Đường dẫn tới hình ảnh của bạn
        alt="Chat Icon"
        className="chat-icon"
        onClick={toggleChat}
      />
      {isOpen && <ChatWindow />}
    </div>
  );
};

export default ChatIcon;
