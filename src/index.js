import qrcode from 'qrcode-generator';
import { landingPage } from './html.js';

function generateQRCodeSVG(text) {
  const qr = qrcode(0, 'L');
  qr.addData(text);
  qr.make();
  
  const cellSize = 10;
  const margin = 2;
  const size = qr.getModuleCount();
  const totalSize = (size + margin * 2) * cellSize;
  
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${totalSize}" height="${totalSize}">`;
  svg += `<rect width="${totalSize}" height="${totalSize}" fill="white"/>`;
  
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (qr.isDark(row, col)) {
        const x = (col + margin) * cellSize;
        const y = (row + margin) * cellSize;
        svg += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="black"/>`;
      }
    }
  }
  
  svg += '</svg>';
  return svg;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const text = url.searchParams.get('data');
    
    // Return landing page if no data parameter
    if (!text) {
      return new Response(landingPage, {
        headers: { 'Content-Type': 'text/html' }
      });
    }

    try {
      const svg = generateQRCodeSVG(text);
      
      // Return as downloadable SVG
      return new Response(svg, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Content-Disposition': 'attachment; filename="qrcode.svg"'
        }
      });
    } catch (error) {
      return new Response(`Error generating QR code: ${error.message}`, {
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }
};
