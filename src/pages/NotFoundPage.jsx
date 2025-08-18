// src/pages/NotFoundPage.jsx
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-number">404</h1>
        <p className="not-found-message">Página no encontrada</p>
      </div>
      
      <style jsx>{`
        .not-found-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
          padding: 2rem;
        }
        
        .not-found-content {
          text-align: center;
        }
        
        .not-found-number {
          font-size: 12rem;
          font-weight: bold;
          color: #333;
          margin: 0;
          line-height: 1;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .not-found-message {
          font-size: 1.5rem;
          color: #666;
          margin-top: 1rem;
          font-weight: 300;
        }
        
        @media (max-width: 768px) {
          .not-found-number {
            font-size: 8rem;
          }
          
          .not-found-message {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 480px) {
          .not-found-number {
            font-size: 6rem;
          }
          
          .not-found-message {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;