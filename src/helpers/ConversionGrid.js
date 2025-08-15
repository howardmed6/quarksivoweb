import React from 'react';
import ConversionCard from './ConversionCard';

const ConversionGrid = ({ options, onConversionClick }) => {
  return (
    <div className="conversion-grid">
      {options.map((option, index) => (
        <ConversionCard
          key={option.id}
          option={option}
          index={index}
          onClick={() => onConversionClick(option.route)}
        />
      ))}
    </div>
  );
};

export default ConversionGrid;