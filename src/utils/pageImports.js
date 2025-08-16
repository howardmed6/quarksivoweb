// utils/pageImports.js
// Centralizamos todas las importaciones de páginas aquí

import HomePage from '../pages/HomePage';
import BestsellersPage from '../pages/BestsellersPage';
import ArchivoPage from '../pages/ArchivoPage';
import ColeccionesPage from '../pages/ColeccionesPage';
import NosotrosPage from '../pages/NosotrosPage';
import OfertasPage from '../pages/OfertasPage';
import BlogPage from '../pages/BlogPage';
import JpgToPngPage from '../pages/JpgToPngPage';
import PngToJpgPage from '../pages/PngToJpgPage';

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
  PngToJpgPage
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
  PngToJpgPage
};