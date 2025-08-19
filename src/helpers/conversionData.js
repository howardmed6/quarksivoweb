export const conversionOptions = [
  // 📂 Documentos (IDs 1-38)
//   { id: 1, title: 'Word a PDF', icon: '📄', route: '/document/word-to-pdf', category: 'documents' },
//   { id: 2, title: 'PDF a Word', icon: '📝', route: '/document/pdf-to-word', category: 'documents' },
//   { id: 3, title: 'Excel a PDF', icon: '📊', route: '/document/excel-to-pdf', category: 'documents' },
//   { id: 4, title: 'PDF a Excel', icon: '📊', route: '/document/pdf-to-excel', category: 'documents' },
//   { id: 5, title: 'PPT a PDF', icon: '📽️', route: '/document/ppt-to-pdf', category: 'documents' },
//   { id: 6, title: 'PDF a PPT', icon: '📽️', route: '/document/pdf-to-ppt', category: 'documents' },
//   { id: 7, title: 'Convertir a PDF', icon: '📋', route: '/document/any-to-pdf', category: 'documents' },
//   { id: 8, title: 'TXT a PDF', icon: '📄', route: '/document/txt-to-pdf', category: 'documents' },
//   { id: 9, title: 'PDF a TXT', icon: '📄', route: '/document/pdf-to-txt', category: 'documents' },
//   { id: 10, title: 'PDF a HTML', icon: '🌐', route: '/document/pdf-to-html', category: 'documents' },
//   { id: 11, title: 'HTML a PDF', icon: '🌐', route: '/document/html-to-pdf', category: 'documents' },
//   { id: 12, title: 'Eliminar contraseña PDF', icon: '🔓', route: '/document/remove-pdf-password', category: 'documents' },
//   { id: 13, title: 'DOCX a DOC', icon: '📝', route: '/document/docx-to-doc', category: 'documents' },
//   { id: 14, title: 'DOC a DOCX', icon: '📝', route: '/document/doc-to-docx', category: 'documents' },
//   { id: 15, title: 'DOC a ODT', icon: '📝', route: '/document/doc-to-odt', category: 'documents' },
//   { id: 16, title: 'ODT a DOC', icon: '📝', route: '/document/odt-to-doc', category: 'documents' },
//   { id: 17, title: 'PDF a EPUB', icon: '📚', route: '/document/pdf-to-epub', category: 'documents' },
//   { id: 18, title: 'EPUB a PDF', icon: '📚', route: '/document/epub-to-pdf', category: 'documents' },
//   { id: 19, title: 'EPUB a MOBI', icon: '📚', route: '/document/epub-to-mobi', category: 'documents' },
//   { id: 20, title: 'MOBI a EPUB', icon: '📚', route: '/document/mobi-to-epub', category: 'documents' },
//   { id: 21, title: 'PDF a MOBI', icon: '📚', route: '/document/pdf-to-mobi', category: 'documents' },
//   { id: 22, title: 'PDF a DOCX', icon: '📄', route: '/document/pdf-to-docx', category: 'documents' },
//   { id: 23, title: 'PDF a RTF', icon: '📄', route: '/document/pdf-to-rtf', category: 'documents' },
//   { id: 24, title: 'PDF a ODT', icon: '📄', route: '/document/pdf-to-odt', category: 'documents' },
//   { id: 25, title: 'Unir PDF', icon: '📎', route: '/document/merge-pdf', category: 'documents' },
//   { id: 26, title: 'Dividir PDF', icon: '✂️', route: '/document/split-pdf', category: 'documents' },
//   { id: 27, title: 'Comprimir PDF', icon: '🗜️', route: '/document/compress-pdf', category: 'documents' },
//   { id: 28, title: 'Firmar PDF', icon: '✍️', route: '/document/sign-pdf', category: 'documents' },
//   { id: 29, title: 'Solicitar firma', icon: '✍️', route: '/document/request-signature', category: 'documents' },
//   { id: 30, title: 'PDF a imágenes', icon: '🖼️', route: '/document/pdf-to-images', category: 'documents' },
//   { id: 31, title: 'Extraer imágenes PDF', icon: '🖼️', route: '/document/extract-pdf-images', category: 'documents' },
//   { id: 32, title: 'Rotar PDF', icon: '🔄', route: '/document/rotate-pdf', category: 'documents' },
//   { id: 33, title: 'Reordenar páginas PDF', icon: '📄', route: '/document/reorder-pdf', category: 'documents' },
//   { id: 34, title: 'Markdown a PDF', icon: '📝', route: '/document/markdown-to-pdf', category: 'documents' },
//   { id: 35, title: 'Excel a CSV', icon: '📊', route: '/document/excel-to-csv', category: 'documents' },
//   { id: 36, title: 'CSV a Excel', icon: '📊', route: '/document/csv-to-excel', category: 'documents' },
//   { id: 37, title: 'JSON a CSV', icon: '📋', route: '/document/json-to-csv', category: 'documents' },
//   { id: 38, title: 'CSV a JSON', icon: '📋', route: '/document/csv-to-json', category: 'documents' },
//   { id: 39, title: 'DOCX a PDF', icon: '📄', route: '/document/docx-to-pdf', category: 'documents' },

//   // 🖼️ Imágenes (IDs 139-161)
//   { id: 139, title: 'JPG a PDF', icon: '🖼️', route: '/document/jpg-to-pdf', category: 'images' },
//   { id: 140, title: 'PDF a JPG', icon: '🖼️', route: '/document/pdf-to-jpg', category: 'images' },
//   { id: 141, title: 'PNG a PDF', icon: '🖼️', route: '/document/png-to-pdf', category: 'images' },
   { id: 142, title: 'PNG a JPG', icon: '🔄', route: '/image/png-to-jpg', category: 'images' },
   { id: 143, title: 'JPG a PNG', icon: '🔄', route: '/image/jpg-to-png', category: 'images' },
   //{ id: 144, title: 'BMP a JPG', icon: '🔄', route: '/image/bmp-to-jpg', category: 'images' },
   { id: 145, title: 'JPG a BMP', icon: '🔄', route: '/image/jpg-to-bmp', category: 'images' },
   { id: 145, title: 'WebP a JPG', icon: '🔄', route: '/image/webp-to-jpg', category: 'images' },
   { id: 146, title: 'JPG a WebP', icon: '🔄', route: '/image/jpg-to-webp', category: 'images' },
   { id: 147, title: 'PNG a WebP', icon: '🔄', route: '/image/png-to-webp', category: 'images' },
   { id: 148, title: 'WebP a PNG', icon: '🔄', route: '/image/webp-to-png', category: 'images' },
   { id: 149, title: 'JPG a AVIF', icon: '🔄', route: '/image/jpg-to-avif', category: 'images' },
   { id: 150, title: 'PNG a AVIF', icon: '🔄', route: '/image/png-to-avif', category: 'images' },
   { id: 151, title: 'AVIF a JPG', icon: '🔄', route: '/image/avif-to-jpg', category: 'images' },
   { id: 152, title: 'HEIC a JPG', icon: '🔄', route: '/image/heic-to-jpg', category: 'images' },
//   { id: 153, title: 'GIF a PNG', icon: '🎬', route: '/image/gif-to-png', category: 'images' },
//   { id: 154, title: 'GIF a JPG', icon: '🎬', route: '/image/gif-to-jpg', category: 'images' },
//   { id: 155, title: 'GIF a WebP', icon: '🎬', route: '/image/gif-to-webp', category: 'images' },
//   { id: 156, title: 'Imagen a ICO', icon: '🖼️', route: '/image/image-to-ico', category: 'images' },
//   { id: 157, title: 'Redimensionar imagen', icon: '📏', route: '/image/resize-image', category: 'images' },
//   { id: 158, title: 'Comprimir imagen', icon: '🗜️', route: '/image/compress-image', category: 'images' },
//   { id: 159, title: 'Firmar imagen', icon: '✍️', route: '/image/sign-image', category: 'images' },
//   { id: 160, title: 'Texto a imagen', icon: '🖼️', route: '/image/text-to-image', category: 'images' },
//   { id: 161, title: 'OCR: Imagen a texto', icon: '👁️', route: '/image/ocr-image-to-text', category: 'images' },
// { id: 162, title: 'HEIC a PNG', icon: '🔄', route: '/image/heic-to-png', category: 'images' },
// { id: 163, title: 'SVG a WebP', icon: '🔄', route: '/image/svg-to-webp', category: 'images' },
// { id: 164, title: 'SVG a PNG', icon: '🔄', route: '/image/svg-to-png', category: 'images' },
// { id: 165, title: 'SVG a JPG', icon: '🔄', route: '/image/svg-to-jpg', category: 'images' },
// { id: 166, title: 'SVG a JPEG', icon: '🔄', route: '/image/svg-to-jpeg', category: 'images' },
{ id: 167, title: 'HEIC a PNG', icon: '🔄', route: '/image/heic-to-png', category: 'images' },
{ id: 168, title: 'HEIC a WebP', icon: '🔄', route: '/image/heic-to-webp', category: 'images' },
{ id: 169, title: 'HEIC a AVIF', icon: '🔄', route: '/image/heic-to-avif', category: 'images' },
{ id: 170, title: 'JPG a HEIC', icon: '🔄', route: '/image/jpg-to-heic', category: 'images' },
{ id: 171, title: 'PNG a HEIC', icon: '🔄', route: '/image/png-to-heic', category: 'images' },
//{ id: 172, title: 'WebP a HEIC', icon: '🔄', route: '/image/webp-to-heic', category: 'images' },
//{ id: 173, title: 'AVIF a HEIC', icon: '🔄', route: '/image/avif-to-heic', category: 'images' },


//   // 🎬 Videos (IDs 262-264)
//   { id: 262, title: 'MP4 a GIF', icon: '🎬', route: '/video/mp4-to-gif', category: 'videos' },
//   { id: 263, title: 'GIF a MP4', icon: '🎬', route: '/video/gif-to-mp4', category: 'videos' },
//   { id: 264, title: 'MOV a MP4', icon: '🎬', route: '/video/mov-to-mp4', category: 'videos' },

//   // 🎵 Audio (IDs 365-369)
//   { id: 365, title: 'MP4 a MP3', icon: '🎵', route: '/audio/mp4-to-mp3', category: 'audio' },
//   { id: 366, title: 'WAV a MP3', icon: '🎵', route: '/audio/wav-to-mp3', category: 'audio' },
//   { id: 367, title: 'MP3 a OGG', icon: '🎵', route: '/audio/mp3-to-ogg', category: 'audio' },
//   { id: 368, title: 'Recortar audio', icon: '✂️', route: '/audio/trim-audio', category: 'audio' },
//   { id: 369, title: 'MP3 a texto', icon: '🎙️', route: '/audio/mp3-to-text', category: 'audio' },

  // 🔧 Otros (IDs 470+)
  // Aquí puedes agregar nuevas funcionalidades que no encajen en las otras categorías
];

// Función helper para obtener el color según la categoría
export const getCategoryColor = (category) => {
  const categoryColors = {
    documents: 'blue',
    images: 'green', 
    videos: 'orange',
    audio: 'purple',
    others: 'gray'
  };
  return categoryColors[category] || 'blue';
};

// Función helper para obtener el nombre de la categoría
export const getCategoryName = (category) => {
  const categoryNames = {
    documents: 'Documentos',
    images: 'Imágenes',
    videos: 'Videos', 
    audio: 'Audio',
    others: 'Otros'
  };
  return categoryNames[category] || 'Documentos';
};

// Orden de popularidad/demanda (IDs más demandados primero)
const popularityOrder = [
  1,   // Word a PDF
  2,   // PDF a Word
  139, // JPG a PDF
  140, // PDF a JPG
  3,   // Excel a PDF
  4,   // PDF a Excel
  142, // PNG a JPG
  143, // JPG a PNG
  25,  // Unir PDF
  26,  // Dividir PDF
  27,  // Comprimir PDF
  5,   // PPT a PDF
  6,   // PDF a PPT
  141, // PNG a PDF
  158, // Comprimir imagen
  157, // Redimensionar imagen
  365, // MP4 a MP3
  366, // WAV a MP3
  262, // MP4 a GIF
  8,   // TXT a PDF
  9,   // PDF a TXT
  39,
  162,
  163,
  164,
  165,
  166,
  // ... el resto en orden del array original
];

// Función para reordenar según popularidad
export const getOrderedConversions = (options) => {
  const ordered = [];
  const remaining = [...options];
  
  // Primero agregar los elementos según el orden de popularidad
  popularityOrder.forEach(id => {
    const index = remaining.findIndex(option => option.id === id);
    if (index !== -1) {
      ordered.push(remaining[index]);
      remaining.splice(index, 1);
    }
  });
  
  // Agregar el resto que no esté en la lista de popularidad
  ordered.push(...remaining);
  
  return ordered;
};