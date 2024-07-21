import React from 'react';

import Footer from './components/Footer';
import Footer_db from './components/Footer_db';
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer_db/>
    </div>
  );
};

export default DashboardLayout;
