import React, { useState, useEffect } from 'react';
import { BANNER_MESSAGES } from '../utils/constants';
import '../styles/components.css';

const TopBanner = ({ setCurrentPage }) => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % BANNER_MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentMessage((prev) => prev === 0 ? BANNER_MESSAGES.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentMessage((prev) => (prev + 1) % BANNER_MESSAGES.length);
  };

  const handleBannerClick = () => {
    const currentBanner = BANNER_MESSAGES[currentMessage];
    if (setCurrentPage && currentBanner.route) {
      setCurrentPage(currentBanner.route);
    } else {
      // Fallback si no hay setCurrentPage
      console.log(`Redirigiendo a: ${currentBanner.route}`);
    }
  };

  return (
    <div className="top-banner">
      <div className="banner-content">
        <button onClick={goToPrevious} className="banner-nav-btn">
          &#8249;
        </button>
        
        <div 
          className="banner-message clickable" 
          onClick={handleBannerClick}
          style={{ cursor: 'pointer' }}
        >
          {BANNER_MESSAGES[currentMessage].text}
        </div>
        
        <button onClick={goToNext} className="banner-nav-btn">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default TopBanner;