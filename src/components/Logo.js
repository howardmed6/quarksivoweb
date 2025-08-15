import React from 'react';
import logoSvg from '../assets/icons/logo.svg';

const Logo = ({ width = 40, height = 40 }) => (
  <img 
    src={logoSvg} 
    alt="QUARKIVO Logo" 
    width={width} 
    height={height}
    style={{ display: 'block' }}
  />
);

export default Logo;