import React from 'react';

import Footer from './components/Footer';
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default DashboardLayout;
