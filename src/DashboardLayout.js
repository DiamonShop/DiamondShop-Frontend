import React from 'react';
import Navbar_left_dash from './components/Navbar_left_dash';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      
    </div>
  );
};

export default DashboardLayout;
