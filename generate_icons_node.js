#!/usr/bin/env node
/**
 * Generate PWA icons for TridentOps portfolio
 * Dark theme with blue accent, modern trident logo
 */

const fs = require('fs');
const path = require('path');

// Ensure directory exists
const iconsDir = 'C:/Users/trebo/TRIDENTOPS/trident-astro-portfolio/public/icons';
fs.mkdirSync(iconsDir, { recursive: true });

console.log('Generating TridentOps PWA icons...');
console.log('Background: #09090b, Accent: #3b82f6');

function createIcon(size, outputPath) {
  // Create a simple SVG first, then convert to PNG using canvas
  // For simplicity, we'll create a PNG using pure JS with Node-Canvas if available
  // Otherwise fall back to creating an SVG that browsers/PWA will accept

  const svgContent = `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#09090b"/>
  <defs>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0" />
    </linearGradient>
  </defs>

  <!-- Subtle glow background -->
  <ellipse cx="${size/2}" cy="${size/2}" rx="${size*0.25}" ry="${size*0.25}" fill="url(#glow)"/>

  <!-- Trident design -->
  <g fill="#3b82f6" stroke="#60a5fa" stroke-width="${Math.max(1, size/128)}">
    <!-- Shaft -->
    <rect x="${size/2 - size/64}" y="${size/2 - size/3 - size/16}"
          width="${size/32}" height="${size/2.5}" rx="${size/128}"/>

    <!-- Base/connector -->
    <rect x="${size/2 - size/12}" y="${size/2 + size/12 - size/64}"
          width="${size/6}" height="${size/32}" rx="${size/128}"/>

    <!-- Three prongs -->
    ${[ -size/48, 0, size/48 ].map(offset => `
    <rect x="${size/2 + offset - size/48}" y="${size/2 - size/3}"
          width="${size/24}" height="${size/3.5}" rx="${size/128}"/>
    `).join('')}
  </g>

  <!-- Highlight on prongs -->
  <g fill="#60a5fa" opacity="0.6">
    ${[ -size/48, 0, size/48 ].map(offset => `
    <rect x="${size/2 + offset - size/48}" y="${size/2 - size/3}"
          width="${size/24}" height="${Math.max(2, size/80)}" rx="${size/128}"/>
    `).join('')}
  </g>
</svg>`;

  // For now, save as SVG which can be used as PWA icon source
  // Most modern browsers support SVG as PWA icons
  const svgPath = outputPath.replace('.png', '.svg');
  fs.writeFileSync(svgPath, svgContent.trim());

  console.log(`✓ Created SVG: ${svgPath}`);

  // Try to create PNG using sharp if available
  try {
    const sharp = require('sharp');
    sharp(Buffer.from(svgContent)).toFormat('png').toFile(outputPath, (err) => {
      if (err) {
        console.log(`  Note: PNG generation requires sharp, SVG created instead`);
        // Create a placeholder PNG file notice
        fs.writeFileSync(outputPath.replace('.png', '.txt'),
          `SVG version available at ${svgPath}\nInstall sharp for PNG generation: npm install sharp`);
      } else {
        console.log(`✓ Created PNG: ${outputPath} (${size}x${size})`);
      }
    });
  } catch (e) {
    console.log(`  Note: sharp not available, SVG created at ${svgPath}`);
    console.log(`  To generate PNG, install sharp: npm install sharp`);
    // Create a simple placeholder reference
    fs.writeFileSync(outputPath, '');
  }
}

const icon192Path = path.join(iconsDir, 'icon-192x192.png');
const icon512Path = path.join(iconsDir, 'icon-512x512.png');

createIcon(192, icon192Path);
createIcon(512, icon512Path);

console.log('\nIcon generation complete!');
console.log('Note: SVG files created as fallback. Install sharp for PNG generation.');
