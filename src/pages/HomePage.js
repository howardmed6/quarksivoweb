import React from 'react';
import { useLocation, Link } from 'wouter';
import Logo from '../components/Logo';
import VideoBackground from '../helpers/VideoBackground';
import ConversionGrid from '../helpers/ConversionGrid';
import PriorityLegend from '../helpers/PriorityLegend';
import FeaturesSection from '../helpers/FeaturesSection';
import { conversionOptions } from '../helpers/conversionData';
import '../styles/pages.css';
import '../styles/home-header.css';
import '../styles/conversion-grid.css';
import '../styles/priority-legend.css';
import '../styles/responsive.css';
import '../styles/layout-fix.css';

const HomePage = () => {
    // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation();
  
  const handleConversionClick = (route) => {
    console.log(`Navegando a: ${route}`);
    setLocation(route); // ← Usar Wouter para navegar
  };

  return (
    <div className="page-container">
      <main className="home-main">
        <div className="home-content">
          <div className="home-header">
            <div className="home-text-section">
              <Link href="/">
                <Logo width={60} height={60} />
              </Link>
              <div className="home-text">
                <Link href="/">
                  <h1 className="home-title">QUARKIVO</h1>
                </Link>
                <p className="home-subtitle">Tu archivo digital está listo</p>
              </div>
            </div>
            
            <VideoBackground />
          </div>
          
          <ConversionGrid
            options={conversionOptions}
            onConversionClick={handleConversionClick}
          />
          
          <PriorityLegend />
        </div>
      </main>
      
      <FeaturesSection />
    </div>
  );
};

export default HomePage;