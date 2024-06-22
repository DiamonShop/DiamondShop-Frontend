import React, { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="chat-window">
      Quét mã QR
      <img src="assets/img/zalo-qr.jpg"></img>
    </div>
    
  );
};

export default ChatWindow;
