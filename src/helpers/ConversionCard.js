import React from 'react';

const ConversionCard = ({ option, index, onClick }) => {
  const getColorClass = (index, priority) => {
    const colors = ['blue', 'green', 'orange', 'black'];
    if (priority === 'top') return 'top-priority';
    return colors[index % 4];
  };

  return (
    <button 
      onClick={onClick}
      className={`conversion-card ${getColorClass(index, option.priority)}`}
    >
      <div className="card-icon">{option.icon}</div>
      <h3 className="card-title">{option.title}</h3>
    </button>
  );
};

export default ConversionCard;