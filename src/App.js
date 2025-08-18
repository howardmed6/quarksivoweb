// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopBanner from './components/TopBanner';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';

import {
  HomePage,
  BestsellersPage,
  ArchivoPage,
  ColeccionesPage,
  NosotrosPage,
  OfertasPage,
  BlogPage,
  JpgToPngPage,
  PngToJpgPage,
  WebpToJpgPage,
  JpgToWebpPage,
  PngToWebpPage,
  WebpToPngPage,
  AvifToJpgPage,
  JpgToAvifPage,
  PngToAvifPage,
  NotFoundPage
} from './utils/pageImports';

import './styles/globals.css';

const App = () => {
  return (
    // ⚠️ QUITAR el HelmetProvider de aquí - ya está en index.js
    <Router>
      <Helmet>
        <title>Quarksivo</title>
        <meta name="description" content="Herramientas y contenidos de Quarksivo." />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Helmet>
               
      <div className="app-container">
        <TopBanner />
        <MainHeader />
                 
        <main>
          <Routes>
            {/* Páginas principales */}
            <Route path="/" element={<HomePage />} />
            <Route path="/bestsellers" element={<BestsellersPage />} />
            <Route path="/archivo" element={<ArchivoPage />} />
            <Route path="/colecciones" element={<ColeccionesPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/ofertas" element={<OfertasPage />} />
            <Route path="/blog" element={<BlogPage />} />
                           
            {/* Conversiones de imágenes */}
            <Route path="/image/jpg-to-png" element={<JpgToPngPage />} />
            <Route path="/image/png-to-jpg" element={<PngToJpgPage />} />
            <Route path="/image/webp-to-jpg" element={<WebpToJpgPage />} />
            <Route path="/image/jpg-to-webp" element={<JpgToWebpPage />} />
            <Route path="/image/png-to-webp" element={<PngToWebpPage />} />
            <Route path="/image/webp-to-png" element={<WebpToPngPage />} />
            <Route path="/image/avif-to-jpg" element={<AvifToJpgPage />} />
            <Route path="/image/jpg-to-avif" element={<JpgToAvifPage />} />
            <Route path="/image/png-to-avif" element={<PngToAvifPage />} />
                           
            {/* Ruta 404 - opcional */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
                 
        <Footer />
      </div>
    </Router>
  );
};

export default App;