import React from 'react';

const ExtraSection = ({ title, children }) => {
  return (
    <div
      style={{
        background: '#ffffff',
        color: '#000000',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '2rem'
      }}
    >
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default ExtraSection;
