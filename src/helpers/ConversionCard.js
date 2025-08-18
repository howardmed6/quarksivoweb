import React from 'react';

const ConversionCard = ({ option, index, onClick }) => {
  const getCategoryClass = (category) => {
    const categoryClasses = {
      documents: 'documents-priority',
      images: 'images-priority', 
      videos: 'videos-priority',
      audio: 'audio-priority',
      others: 'others-priority'
    };
    return categoryClasses[category] || 'documents-priority';
  };

  return (
    <button 
      onClick={onClick}
      className={`conversion-card ${getCategoryClass(option.category)}`}
    >
      <div className="card-icon">{option.icon}</div>
      <h3 className="card-title">{option.title}</h3>
    </button>
  );
};

export default ConversionCard;