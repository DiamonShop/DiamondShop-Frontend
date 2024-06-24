import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatIcon from './chat/ChatIcon';
const MainLayout = ({ children , tokenIsValid }) => {
  return (
    <div>
      <Header tokenIsValid={tokenIsValid}/>
      <main>{children}</main>
      <Footer />
      <ChatIcon/>
    </div>
  );
};

export default MainLayout;
