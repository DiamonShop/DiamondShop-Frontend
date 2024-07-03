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
      <a href="https://m.me/337606799444520" target="_blank">mess</a>
    </div>

  );
};

export default ChatWindow;
