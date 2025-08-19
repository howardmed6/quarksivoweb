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
import DocxToPdfPage from '../pages/DocxToPdfPage';
import PdfToDocxPage from '../pages/PdfToDocxPage'; 
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
import HeicToJpgPage from '../pages/HeicToJpgPage';
import HeicToWebpPage from '../pages/HeicToWebpPage';
import HeicToAvifPage from '../pages/HeicToAvifPage';
import JpgToHeicPage from '../pages/JpgToHeicPage';
import PngToHeicPage from '../pages/PngToHeicPage';
import WebpToHeicPage from '../pages/WebpToHeicPage';
import AvifToHeicPage from '../pages/AvifToHeicPage';

import SvgToWebpPage from '../pages/SvgToWebpPage';
import SvgToPngPage from '../pages/SvgToPngPage';
import SvgToJpgPage from '../pages/SvgToJpgPage';
import SvgToJpegPage from '../pages/SvgToJpegPage';
import JpgToBmpPage from '../pages/JpgToBmpPage';
import BmpToJpgPage from '../pages/BmpToJpgPage';
import PngToBmpPage from '../pages/PngToBmpPage';
import BmpToPngPage from '../pages/BmpToPngPage';
import GifToWebpPage from '../pages/GifToWebpPage';
import GifToJpgPage from '../pages/GifToJpgPage';
import GifToPngPage from '../pages/GifToPngPage';
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
  DocxToPdfPage,
  PdfToDocxPage, 
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
  HeicToJpgPage,
  SvgToWebpPage,
  SvgToPngPage, 
  SvgToJpgPage,
  SvgToJpegPage,
  JpgToBmpPage,
BmpToJpgPage,
PngToBmpPage,
BmpToPngPage,
GifToWebpPage,
GifToJpgPage,
GifToPngPage,
  HeicToWebpPage,
HeicToAvifPage,
JpgToHeicPage,
PngToHeicPage,
WebpToHeicPage,
AvifToHeicPage,
  
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
  DocxToPdfPage,
  PdfToDocxPage, // No existe aún
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
  HeicToJpgPage,
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
    HeicToWebpPage,
HeicToAvifPage,
JpgToHeicPage,
PngToHeicPage,
WebpToHeicPage,
AvifToHeicPage,
  // Video
  GifToMp4Page,
  
  NotFoundPage
};