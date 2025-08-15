import React from 'react';

const PriorityLegend = () => {
  const legendItems = [
    { label: 'Alfa', className: 'top-priority-dot' },
    { label: 'Beta', className: 'high-priority-dot' },
    { label: 'Omega', className: 'medium-priority-dot' },
    { label: 'Mega', className: 'low-priority-dot' }
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