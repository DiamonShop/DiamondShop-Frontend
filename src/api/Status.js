import { useState } from 'react';

const useStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    handleLogin,
    handleLogout
  };
};

export default useStatus;
