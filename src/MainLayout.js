import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const MainLayout = ({ children , tokenIsValid }) => {
  return (
    <div>
      <Header tokenIsValid={tokenIsValid}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
