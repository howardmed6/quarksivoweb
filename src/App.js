// src/App.jsx
import React from 'react';
import { Router, Route, Switch } from 'wouter';

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
    <Router>
      <div className="app-container">
        <TopBanner />
        <MainHeader />
        
        <main>
          <Switch>
            {/* Páginas principales */}
            <Route path="/" component={HomePage} />
            <Route path="/bestsellers" component={BestsellersPage} />
            <Route path="/archivo" component={ArchivoPage} />
            <Route path="/colecciones" component={ColeccionesPage} />
            <Route path="/nosotros" component={NosotrosPage} />
            <Route path="/ofertas" component={OfertasPage} />
            <Route path="/blog" component={BlogPage} />
            
            {/* Conversiones de imágenes */}
            <Route path="/image/jpg-to-png" component={JpgToPngPage} />
            <Route path="/image/png-to-jpg" component={PngToJpgPage} />
            <Route path="/image/webp-to-jpg" component={WebpToJpgPage} />
            <Route path="/image/jpg-to-webp" component={JpgToWebpPage} />
            <Route path="/image/png-to-webp" component={PngToWebpPage} />
            <Route path="/image/webp-to-png" component={WebpToPngPage} />
            <Route path="/image/avif-to-jpg" component={AvifToJpgPage} />
            <Route path="/image/jpg-to-avif" component={JpgToAvifPage} />
            <Route path="/image/png-to-avif" component={PngToAvifPage} />
            
            {/* Ruta 404 - debe ir al final */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;