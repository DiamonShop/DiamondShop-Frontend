import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {pathname} =useLocation();

 


  // Hàm để kiểm tra vị trí cuộn của trang
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {

    window.scrollTo(0,0);

    window.scrollTo(0, 0);

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [pathname]);

  return (
    <div className={`scroll-top ${isVisible ? '' : 'not-visible'}`} onClick={scrollToTop}>
      <i className="fa fa-angle-up"></i>
    </div>
  );
};

export default ScrollToTop;