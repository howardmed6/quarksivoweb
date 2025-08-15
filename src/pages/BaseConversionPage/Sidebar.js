import React from 'react';

const Sidebar = ({ relatedTools, onToolClick }) => {
  return (
    <aside className="conversion-sidebar">
      <h3>Herramientas relacionadas</h3>
      <div className="sidebar-options">
        {relatedTools.map((tool, index) => (
          <div 
            key={index} 
            className="sidebar-option"
            onClick={() => onToolClick(tool.route)}
          >
            <span className="sidebar-icon">{tool.icon}</span>
            <span>{tool.title}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;