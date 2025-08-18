// utils/pageImports.js
// Centralizamos todas las importaciones de páginas aquí

import HomePage from '../pages/HomePage';
import BestsellersPage from '../pages/BestsellersPage';
import ArchivoPage from '../pages/ArchivoPage';
import ColeccionesPage from '../pages/ColeccionesPage';
import NosotrosPage from '../pages/NosotrosPage';
import OfertasPage from '../pages/OfertasPage';
import BlogPage from '../pages/BlogPage';

// Páginas de conversión de documentos
import DocToPdfPage from '../pages/DocToPdfPage';
// import PdfToDocxPage from '../pages/PdfToDocxPage'; // No existe aún
import PdfToOdtPage from '../pages/PdfToOdtPage';
import PdfToRtfPage from '../pages/PdfToRtfPage';
import PdfToTxtPage from '../pages/PdfToTxtPage';

// Páginas de conversión de imágenes existentes
import JpgToPngPage from '../pages/JpgToPngPage';
import PngToJpgPage from '../pages/PngToJpgPage';
import WebpToJpgPage from '../pages/WebpToJpgPage';

// Nuevas páginas de conversión de imágenes
import JpgToWebpPage from '../pages/JpgToWebpPage';
import PngToWebpPage from '../pages/PngToWebpPage';
import WebpToPngPage from '../pages/WebpToPngPage';
import AvifToJpgPage from '../pages/AvifToJpgPage';
import JpgToAvifPage from '../pages/JpgToAvifPage';
import PngToAvifPage from '../pages/PngToAvifPage';
import HeicToPngPage from '../pages/HeicToPngPage';

// Páginas de conversión de video
import GifToMp4Page from '../pages/GifToMp4Page';

import NotFoundPage from '../pages/NotFoundPage';

// Exportamos todas las páginas como un objeto
export const pages = {
  HomePage,
  BestsellersPage,
  ArchivoPage,
  ColeccionesPage,
  NosotrosPage,
  OfertasPage,
  BlogPage,
  
  // Documentos
  DocToPdfPage,
  // PdfToDocxPage, // No existe aún
  PdfToOdtPage,
  PdfToRtfPage,
  PdfToTxtPage,
  
  // Imágenes
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
  
  // Video
  GifToMp4Page,
  
  NotFoundPage
};

// También exportamos individualmente por si prefieres usarlas así
export {
  HomePage,
  BestsellersPage,
  ArchivoPage,
  ColeccionesPage,
  NosotrosPage,
  OfertasPage,
  BlogPage,
  
  // Documentos
  DocToPdfPage,
  // PdfToDocxPage, // No existe aún
  PdfToOdtPage,
  PdfToRtfPage,
  PdfToTxtPage,
  
  // Imágenes
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
  
  // Video
  GifToMp4Page,
  
  NotFoundPage
};