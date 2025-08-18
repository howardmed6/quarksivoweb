import React from 'react';
import ConversionCard from './ConversionCard';
import { getOrderedConversions } from '../helpers/conversionData';

const ConversionGrid = ({ options, onConversionClick }) => {
  // Reordenar las opciones según popularidad
  const orderedOptions = getOrderedConversions(options);

  return (
    <div className="conversion-grid">
      {orderedOptions.map((option, index) => (
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