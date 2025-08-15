import React, { useState, useEffect } from 'react';
import TopBanner from './components/TopBanner';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';

// Importar páginas
import HomePage from './pages/HomePage';
import BestsellersPage from './pages/BestsellersPage';
import ArchivoPage from './pages/ArchivoPage';
import ColeccionesPage from './pages/ColeccionesPage';
import NosotrosPage from './pages/NosotrosPage';
import OfertasPage from './pages/OfertasPage';
import BlogPage from './pages/BlogPage';
import JpgToPngPage from './pages/JpgToPngPage';

// Importar estilos globales
import './styles/globals.css';

const App = () => {
  // Inicializar con la página guardada o 'home' por defecto
  const [currentPage, setCurrentPage] = useState(() => {
    try {
      return sessionStorage.getItem('currentPage') || 'home';
    } catch {
      return 'home';
    }
  });

  // Guardar la página actual cada vez que cambie
  useEffect(() => {
    try {
      sessionStorage.setItem('currentPage', currentPage);
    } catch {
      // Si falla sessionStorage, continuar sin guardar
    }
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'bestsellers': return <BestsellersPage />;
      case 'archivo': return <ArchivoPage />;
      case 'colecciones': return <ColeccionesPage />;
      case 'nosotros': return <NosotrosPage />;
      case 'ofertas': return <OfertasPage />;
      case 'blog': return <BlogPage />;
      case 'jpg-to-png': return <JpgToPngPage />;
      // Aquí puedes agregar más páginas de conversión
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      <TopBanner />
      <MainHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;