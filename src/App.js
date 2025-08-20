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
  
  // Páginas de conversión de documentos
  DocxToPdfPage,  
  PdfToDocxPage, 
  PdfToOdtPage,
  PdfToRtfPage,
  PdfToTxtPage,
  
  // Páginas de conversión de imágenes
  JpgToPngPage,
  PngToJpgPage,
  WebpToJpgPage,
  JpgToWebpPage,
  PngToWebpPage,
  WebpToPngPage,
  AvifToJpgPage,
  JpgToAvifPage,
  PngToAvifPage,
  HeicToPngPage,
  HeicToJpgPage,
  HeicToWebpPage,
HeicToAvifPage,
JpgToHeicPage,
PngToHeicPage,
WebpToHeicPage,
AvifToHeicPage,
AvifToPngPage,
AvifToWebpPage,
AvifToBmpPage,

  SvgToWebpPage,
  SvgToPngPage, 
  SvgToJpgPage,
  SvgToJpegPage,
  BmpToJpgPage,
  JpgToBmpPage,
PngToBmpPage,
BmpToPngPage,
GifToWebpPage,
GifToJpgPage,
GifToPngPage,
  
  // Páginas de conversión de video
  GifToMp4Page,
  
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
            
            {/* Conversiones de documentos */}
            <Route path="/document/docx-to-pdf" component={DocxToPdfPage} /> 
            <Route path="/document/pdf-to-docx" component={PdfToDocxPage} /> 
            <Route path="/document/pdf-to-odt" component={PdfToOdtPage} />
            <Route path="/document/pdf-to-rtf" component={PdfToRtfPage} />
            <Route path="/document/pdf-to-txt" component={PdfToTxtPage} />
            
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
            <Route path="/image/heic-to-png" component={HeicToPngPage} />
            <Route path="/image/heic-to-jpg" component={HeicToJpgPage} />
            <Route path="/image/svg-to-webp" component={SvgToWebpPage} />
            <Route path="/image/svg-to-png" component={SvgToPngPage} />
            <Route path="/image/svg-to-jpg" component={SvgToJpgPage} />
            <Route path="/image/svg-to-jpeg" component={SvgToJpegPage} />
            <Route path="/image/jpg-to-bmp" component={JpgToBmpPage} />
            <Route path="/image/bmp-to-jpg" component={BmpToJpgPage} />
            <Route path="/image/png-to-bmp" component={PngToBmpPage} />
            <Route path="/image/bmp-to-png" component={BmpToPngPage} />
            <Route path="/image/gif-to-webp" component={GifToWebpPage} />
            <Route path="/image/gif-to-jpg" component={GifToJpgPage} />
            <Route path="/image/gif-to-png" component={GifToPngPage} />
            <Route path="/image/heic-to-webp" component={HeicToWebpPage} />
<Route path="/image/heic-to-avif" component={HeicToAvifPage} />
<Route path="/image/jpg-to-heic" component={JpgToHeicPage} />
<Route path="/image/png-to-heic" component={PngToHeicPage} />
<Route path="/image/webp-to-heic" component={WebpToHeicPage} />
<Route path="/image/avif-to-heic" component={AvifToHeicPage} />
<Route path="/image/avif-to-png" component={AvifToPngPage} />
<Route path="/image/avif-to-webp" component={AvifToWebpPage} />
<Route path="/image/avif-to-bmp" component={AvifToBmpPage} />
            
            {/* Conversiones de video */}
            <Route path="/video/gif-to-mp4" component={GifToMp4Page} />
            
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