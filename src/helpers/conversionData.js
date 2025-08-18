export const conversionOptions = [
  // Top 10 – Altísima demanda
  { id: 1, title: 'Word a PDF', icon: '📄', route: '/document/word-to-pdf', priority: 'top' },
  { id: 2, title: 'PDF a Word', icon: '📝', route: '/document/pdf-to-word', priority: 'top' },
  { id: 3, title: 'JPG a PDF', icon: '🖼️', route: '/document/jpg-to-pdf', priority: 'top' },
  { id: 4, title: 'PDF a JPG', icon: '🖼️', route: '/document/pdf-to-jpg', priority: 'top' },
  { id: 5, title: 'Firmar PDF', icon: '✍️', route: '/document/sign-pdf', priority: 'top' },
  
  { id: 6, title: 'Comprimir PDF', icon: '🗜️', route: '/document/compress-pdf', priority: 'top' },
  { id: 7, title: 'Unir PDF', icon: '📎', route: '/document/merge-pdf', priority: 'top' },
  { id: 8, title: 'Dividir PDF', icon: '✂️', route: '/document/split-pdf', priority: 'top' },
  { id: 9, title: 'PNG a JPG', icon: '🔄', route: '/image/png-to-jpg', priority: 'top' },
  { id: 10, title: 'JPG a PNG', icon: '🔄', route: '/image/jpg-to-png', priority: 'top' },

  // 11–25 – Alta demanda
  { id: 11, title: 'Excel a PDF', icon: '📊', route: '/document/excel-to-pdf', priority: 'high' },
  { id: 12, title: 'PDF a Excel', icon: '📊', route: '/document/pdf-to-excel', priority: 'high' },
  { id: 13, title: 'PPT a PDF', icon: '📽️', route: '/document/ppt-to-pdf', priority: 'high' },
  { id: 14, title: 'PDF a PPT', icon: '📽️', route: '/document/pdf-to-ppt', priority: 'high' },
  { id: 15, title: 'Convertir a PDF', icon: '📋', route: '/document/any-to-pdf', priority: 'high' },

  { id: 16, title: 'PDF a TXT', icon: '📄', route: '/document/pdf-to-txt', priority: 'high' },
  { id: 17, title: 'TXT a PDF', icon: '📄', route: '/document/txt-to-pdf', priority: 'high' },
  { id: 18, title: 'PDF a HTML', icon: '🌐', route: '/document/pdf-to-html', priority: 'high' },
  { id: 19, title: 'HTML a PDF', icon: '🌐', route: '/document/html-to-pdf', priority: 'high' },
  { id: 20, title: 'OCR: Imagen a texto', icon: '👁️', route: '/image/ocr-image-to-text', priority: 'high' },

  { id: 21, title: 'Eliminar contraseña PDF', icon: '🔓', route: '/document/remove-pdf-password', priority: 'high' },
  { id: 22, title: 'DOCX a DOC', icon: '📝', route: '/document/docx-to-doc', priority: 'high' },
  { id: 23, title: 'DOC a DOCX', icon: '📝', route: '/document/doc-to-docx', priority: 'high' },
  { id: 24, title: 'PDF a EPUB', icon: '📚', route: '/document/pdf-to-epub', priority: 'high' },
  { id: 25, title: 'EPUB a PDF', icon: '📚', route: '/document/epub-to-pdf', priority: 'high' },

  // 26–40 – Intermedio
  { id: 26, title: 'PNG a PDF', icon: '🖼️', route: '/document/png-to-pdf', priority: 'medium' },
  { id: 27, title: 'BMP a JPG', icon: '🔄', route: '/image/bmp-to-jpg', priority: 'medium' },
  { id: 28, title: 'WebP a JPG', icon: '🔄', route: '/image/webp-to-jpg', priority: 'medium' },
  { id: 29, title: 'JPG a WebP', icon: '🔄', route: '/image/jpg-to-webp', priority: 'medium' },
  { id: 30, title: 'PNG a WebP', icon: '🔄', route: '/image/png-to-webp', priority: 'medium' },

  { id: 31, title: 'WebP a PNG', icon: '🔄', route: '/image/webp-to-png', priority: 'medium' },
  { id: 32, title: 'JPG a AVIF', icon: '🔄', route: '/image/jpg-to-avif', priority: 'medium' },
  { id: 33, title: 'PNG a AVIF', icon: '🔄', route: '/image/png-to-avif', priority: 'medium' },
  { id: 34, title: 'AVIF a JPG', icon: '🔄', route: '/image/avif-to-jpg', priority: 'medium' },
  { id: 35, title: 'Redimensionar imagen', icon: '📏', route: '/image/resize-image', priority: 'medium' },

  { id: 36, title: 'Comprimir imagen', icon: '🗜️', route: '/image/compress-image', priority: 'medium' },
  { id: 37, title: 'PDF a imágenes', icon: '🖼️', route: '/document/pdf-to-images', priority: 'medium' },
  { id: 38, title: 'Excel a CSV', icon: '📊', route: '/document/excel-to-csv', priority: 'medium' },
  { id: 39, title: 'CSV a Excel', icon: '📊', route: '/document/csv-to-excel', priority: 'medium' },
  { id: 40, title: 'JSON a CSV', icon: '📋', route: '/document/json-to-csv', priority: 'medium' },

  { id: 41, title: 'CSV a JSON', icon: '📋', route: '/document/csv-to-json', priority: 'medium' },
  { id: 42, title: 'MP4 a MP3', icon: '🎵', route: '/audio/mp4-to-mp3', priority: 'medium' },
  { id: 43, title: 'WAV a MP3', icon: '🎵', route: '/audio/wav-to-mp3', priority: 'medium' },
  { id: 44, title: 'Recortar audio', icon: '✂️', route: '/audio/trim-audio', priority: 'medium' },
  { id: 45, title: 'MP3 a OGG', icon: '🎵', route: '/audio/mp3-to-ogg', priority: 'medium' },

  // 46–60 – De nicho
  { id: 46, title: 'PPTX a PPT', icon: '📽️', route: '/document/pptx-to-ppt', priority: 'low' },
  { id: 47, title: 'PPT a PPTX', icon: '📽️', route: '/document/ppt-to-pptx', priority: 'low' },
  { id: 48, title: 'EPUB a MOBI', icon: '📚', route: '/document/epub-to-mobi', priority: 'low' },
  { id: 49, title: 'MOBI a EPUB', icon: '📚', route: '/document/mobi-to-epub', priority: 'low' },
  { id: 50, title: 'PDF a MOBI', icon: '📚', route: '/document/pdf-to-mobi', priority: 'low' },

  { id: 51, title: 'Imagen a ICO', icon: '🖼️', route: '/image/image-to-ico', priority: 'low' },
  { id: 52, title: 'DOC a ODT', icon: '📝', route: '/document/doc-to-odt', priority: 'low' },
  { id: 53, title: 'ODT a DOC', icon: '📝', route: '/document/odt-to-doc', priority: 'low' },
  { id: 54, title: 'MP3 a texto', icon: '🎙️', route: '/audio/mp3-to-text', priority: 'low' },
  { id: 55, title: 'Solicitar firma', icon: '✍️', route: '/document/request-signature', priority: 'low' },

  { id: 56, title: 'Firmar imagen', icon: '✍️', route: '/image/sign-image', priority: 'low' },
  { id: 57, title: 'Texto a imagen', icon: '🖼️', route: '/image/text-to-image', priority: 'low' },
  { id: 58, title: 'Extraer imágenes PDF', icon: '🖼️', route: '/document/extract-pdf-images', priority: 'low' },
  { id: 59, title: 'HEIC a JPG', icon: '🔄', route: '/image/heic-to-jpg', priority: 'low' },
  { id: 60, title: 'MP4 a GIF', icon: '🎬', route: '/video/mp4-to-gif', priority: 'low' },

  { id: 61, title: 'GIF a MP4', icon: '🎬', route: '/video/gif-to-mp4', priority: 'low' },
  { id: 62, title: 'MOV a MP4', icon: '🎬', route: '/video/mov-to-mp4', priority: 'low' },
  { id: 63, title: 'Rotar PDF', icon: '🔄', route: '/document/rotate-pdf', priority: 'low' },
  { id: 64, title: 'Reordenar páginas PDF', icon: '📄', route: '/document/reorder-pdf', priority: 'low' },
  { id: 65, title: 'Markdown a PDF', icon: '📝', route: '/document/markdown-to-pdf', priority: 'low' },
];