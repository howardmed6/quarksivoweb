export const conversionOptions = [
  // Top 10 – Altísima demanda
  { id: 1, title: 'Word a PDF', icon: '📄', route: 'word-to-pdf', priority: 'top' },
  { id: 2, title: 'PDF a Word', icon: '📝', route: 'pdf-to-word', priority: 'top' },
  { id: 3, title: 'JPG a PDF', icon: '🖼️', route: 'jpg-to-pdf', priority: 'top' },
  { id: 4, title: 'PDF a JPG', icon: '🖼️', route: 'pdf-to-jpg', priority: 'top' },
  { id: 5, title: 'Firmar PDF', icon: '✍️', route: 'sign-pdf', priority: 'top' },
  
  { id: 6, title: 'Comprimir PDF', icon: '🗜️', route: 'compress-pdf', priority: 'top' },
  { id: 7, title: 'Unir PDF', icon: '📎', route: 'merge-pdf', priority: 'top' },
  { id: 8, title: 'Dividir PDF', icon: '✂️', route: 'split-pdf', priority: 'top' },
  { id: 9, title: 'PNG a JPG', icon: '🔄', route: 'png-to-jpg', priority: 'top' },
  { id: 10, title: 'JPG a PNG', icon: '🔄', route: 'jpg-to-png', priority: 'top' },

  // 11–25 – Alta demanda
  { id: 11, title: 'Excel a PDF', icon: '📊', route: 'excel-to-pdf', priority: 'high' },
  { id: 12, title: 'PDF a Excel', icon: '📊', route: 'pdf-to-excel', priority: 'high' },
  { id: 13, title: 'PPT a PDF', icon: '📽️', route: 'ppt-to-pdf', priority: 'high' },
  { id: 14, title: 'PDF a PPT', icon: '📽️', route: 'pdf-to-ppt', priority: 'high' },
  { id: 15, title: 'Convertir a PDF', icon: '📋', route: 'any-to-pdf', priority: 'high' },

  { id: 16, title: 'PDF a TXT', icon: '📄', route: 'pdf-to-txt', priority: 'high' },
  { id: 17, title: 'TXT a PDF', icon: '📄', route: 'txt-to-pdf', priority: 'high' },
  { id: 18, title: 'PDF a HTML', icon: '🌐', route: 'pdf-to-html', priority: 'high' },
  { id: 19, title: 'HTML a PDF', icon: '🌐', route: 'html-to-pdf', priority: 'high' },
  { id: 20, title: 'OCR: Imagen a texto', icon: '👁️', route: 'ocr-image-to-text', priority: 'high' },

  { id: 21, title: 'Eliminar contraseña PDF', icon: '🔓', route: 'remove-pdf-password', priority: 'high' },
  { id: 22, title: 'DOCX a DOC', icon: '📝', route: 'docx-to-doc', priority: 'high' },
  { id: 23, title: 'DOC a DOCX', icon: '📝', route: 'doc-to-docx', priority: 'high' },
  { id: 24, title: 'PDF a EPUB', icon: '📚', route: 'pdf-to-epub', priority: 'high' },
  { id: 25, title: 'EPUB a PDF', icon: '📚', route: 'epub-to-pdf', priority: 'high' },

  // 26–40 – Intermedio
  { id: 26, title: 'PNG a PDF', icon: '🖼️', route: 'png-to-pdf', priority: 'medium' },
  { id: 27, title: 'BMP a JPG', icon: '🔄', route: 'bmp-to-jpg', priority: 'medium' },
  { id: 28, title: 'WebP a JPG', icon: '🔄', route: 'webp-to-jpg', priority: 'medium' },
  { id: 29, title: 'JPG a WebP', icon: '🔄', route: 'jpg-to-webp', priority: 'medium' },
  { id: 30, title: 'PNG a WebP', icon: '🔄', route: 'png-to-webp', priority: 'medium' },

  { id: 31, title: 'WebP a PNG', icon: '🔄', route: 'webp-to-png', priority: 'medium' },
  { id: 32, title: 'JPG a AVIF', icon: '🔄', route: 'jpg-to-avif', priority: 'medium' },
  { id: 33, title: 'PNG a AVIF', icon: '🔄', route: 'png-to-avif', priority: 'medium' },
  { id: 34, title: 'AVIF a JPG', icon: '🔄', route: 'avif-to-jpg', priority: 'medium' },
  { id: 35, title: 'Redimensionar imagen', icon: '📏', route: 'resize-image', priority: 'medium' },

  { id: 36, title: 'Comprimir imagen', icon: '🗜️', route: 'compress-image', priority: 'medium' },
  { id: 37, title: 'PDF a imágenes', icon: '🖼️', route: 'pdf-to-images', priority: 'medium' },
  { id: 38, title: 'Excel a CSV', icon: '📊', route: 'excel-to-csv', priority: 'medium' },
  { id: 39, title: 'CSV a Excel', icon: '📊', route: 'csv-to-excel', priority: 'medium' },
  { id: 40, title: 'JSON a CSV', icon: '📋', route: 'json-to-csv', priority: 'medium' },

  { id: 41, title: 'CSV a JSON', icon: '📋', route: 'csv-to-json', priority: 'medium' },
  { id: 42, title: 'MP4 a MP3', icon: '🎵', route: 'mp4-to-mp3', priority: 'medium' },
  { id: 43, title: 'WAV a MP3', icon: '🎵', route: 'wav-to-mp3', priority: 'medium' },
  { id: 44, title: 'Recortar audio', icon: '✂️', route: 'trim-audio', priority: 'medium' },
  { id: 45, title: 'MP3 a OGG', icon: '🎵', route: 'mp3-to-ogg', priority: 'medium' },

  // 46–60 – De nicho
  { id: 46, title: 'PPTX a PPT', icon: '📽️', route: 'pptx-to-ppt', priority: 'low' },
  { id: 47, title: 'PPT a PPTX', icon: '📽️', route: 'ppt-to-pptx', priority: 'low' },
  { id: 48, title: 'EPUB a MOBI', icon: '📚', route: 'epub-to-mobi', priority: 'low' },
  { id: 49, title: 'MOBI a EPUB', icon: '📚', route: 'mobi-to-epub', priority: 'low' },
  { id: 50, title: 'PDF a MOBI', icon: '📚', route: 'pdf-to-mobi', priority: 'low' },

  { id: 51, title: 'Imagen a ICO', icon: '🖼️', route: 'image-to-ico', priority: 'low' },
  { id: 52, title: 'DOC a ODT', icon: '📝', route: 'doc-to-odt', priority: 'low' },
  { id: 53, title: 'ODT a DOC', icon: '📝', route: 'odt-to-doc', priority: 'low' },
  { id: 54, title: 'MP3 a texto', icon: '🎙️', route: 'mp3-to-text', priority: 'low' },
  { id: 55, title: 'Solicitar firma', icon: '✍️', route: 'request-signature', priority: 'low' },

  { id: 56, title: 'Firmar imagen', icon: '✍️', route: 'sign-image', priority: 'low' },
  { id: 57, title: 'Texto a imagen', icon: '🖼️', route: 'text-to-image', priority: 'low' },
  { id: 58, title: 'Extraer imágenes PDF', icon: '🖼️', route: 'extract-pdf-images', priority: 'low' },
  { id: 59, title: 'HEIC a JPG', icon: '🔄', route: 'heic-to-jpg', priority: 'low' },
  { id: 60, title: 'MP4 a GIF', icon: '🎬', route: 'mp4-to-gif', priority: 'low' },

  { id: 61, title: 'GIF a MP4', icon: '🎬', route: 'gif-to-mp4', priority: 'low' },
  { id: 62, title: 'MOV a MP4', icon: '🎬', route: 'mov-to-mp4', priority: 'low' },
  { id: 63, title: 'Rotar PDF', icon: '🔄', route: 'rotate-pdf', priority: 'low' },
  { id: 64, title: 'Reordenar páginas PDF', icon: '📄', route: 'reorder-pdf', priority: 'low' },
  { id: 65, title: 'Markdown a PDF', icon: '📝', route: 'markdown-to-pdf', priority: 'low' },
];