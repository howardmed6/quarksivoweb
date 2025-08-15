import React from 'react';
import Logo from '../components/Logo';
import VideoBackground from '../helpers/VideoBackground';
import ConversionGrid from '../helpers/ConversionGrid';
import PriorityLegend from '../helpers/PriorityLegend';
import FeaturesSection from '../helpers/FeaturesSection'; // ← Nueva importación
import { conversionOptions } from '../helpers/conversionData';
import '../styles/pages.css';
import '../styles/home-header.css';
import '../styles/conversion-grid.css';
import '../styles/priority-legend.css';
import '../styles/responsive.css';
import '../styles/layout-fix.css'; // ← Agregar esta línea

const HomePage = ({ setCurrentPage }) => {
  const handleConversionClick = (route) => {
    // Por ahora solo mostrar en consola, después puedes crear las páginas
    console.log(`Navegando a: ${route}`);
     setCurrentPage(route); // ← Cambiar esta línea para que funcione
  };

  return (
    <div className="page-container">
      <main className="home-main">
        <div className="home-content">
          <div className="home-header">
            <div className="home-text-section">
              <Logo width={60} height={60} />
              <div className="home-text">
                <h1 className="home-title">QUARKIVO</h1>
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
      
      {/* ← Aquí agregas las nuevas secciones */}
      <FeaturesSection />
    </div>
  );
};

export default HomePage;