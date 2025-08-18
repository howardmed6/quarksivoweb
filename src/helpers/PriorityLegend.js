import React from 'react';

const PriorityLegend = () => {
  const legendItems = [
    { label: 'Documentos', className: 'documents-dot', color: 'blue' },
    { label: 'Imágenes', className: 'images-dot', color: 'green' },
    { label: 'Videos', className: 'videos-dot', color: 'orange' },
    { label: 'Audio', className: 'audio-dot', color: 'purple' },
    { label: 'Otros', className: 'others-dot', color: 'gray' }
  ];

  return (
    <div className="priority-legend">
      {legendItems.map((item, index) => (
        <div key={index} className="legend-item">
          <span className={`legend-dot ${item.className}`}></span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PriorityLegend;