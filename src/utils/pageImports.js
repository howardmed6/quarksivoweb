// utils/pageImports.js
// Centralizamos todas las importaciones de páginas aquí

import HomePage from '../pages/HomePage';
import BestsellersPage from '../pages/BestsellersPage';
import ArchivoPage from '../pages/ArchivoPage';
import ColeccionesPage from '../pages/ColeccionesPage';
import NosotrosPage from '../pages/NosotrosPage';
import OfertasPage from '../pages/OfertasPage';
import BlogPage from '../pages/BlogPage';

// Páginas de conversión existentes
import JpgToPngPage from '../pages/JpgToPngPage';
import PngToJpgPage from '../pages/PngToJpgPage';
import WebpToJpgPage from '../pages/WebpToJpgPage';

// Nuevas páginas de conversión
import JpgToWebpPage from '../pages/JpgToWebpPage';
import PngToWebpPage from '../pages/PngToWebpPage';
import WebpToPngPage from '../pages/WebpToPngPage';
import AvifToJpgPage from '../pages/AvifToJpgPage';
import JpgToAvifPage from '../pages/JpgToAvifPage';
import PngToAvifPage from '../pages/PngToAvifPage';
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
};