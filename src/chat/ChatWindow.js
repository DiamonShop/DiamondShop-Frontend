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
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
