const fs = require('fs');
const path = require('path');

// Icon paths
const iconsDir = path.join(__dirname, 'public', 'icons');
const icon192Path = path.join(iconsDir, 'icon-192x192.png');
const icon512Path = path.join(iconsDir, 'icon-512x512.png');

console.log('Verification Report:');
console.log('==================================================');

const files = [
    { name: 'icon-192x192.png', path: icon192Path, expectedSize: [192, 192] },
    { name: 'icon-512x512.png', path: icon512Path, expectedSize: [512, 512] }
];

let allValid = true;

for (const file of files) {
    if (fs.existsSync(file.path)) {
        const stats = fs.statSync(file.path);
        const buffer = fs.readFileSync(file.path);

        // Check PNG signature
        const isPNG = buffer[0] === 0x89 &&
                      buffer[1] === 0x50 &&
                      buffer[2] === 0x4E &&
                      buffer[3] === 0x47;

        if (isPNG) {
            // Extract dimensions from IHDR chunk
            const width = buffer.readUInt32BE(16);
            const height = buffer.readUInt32BE(20);

            console.log(`✓ ${file.name}`);
            console.log(`  Path: ${file.path}`);
            console.log(`  Size: ${width}x${height} px`);
            console.log(`  File Size: ${(stats.size / 1024).toFixed(2)} KB`);
            console.log(`  Valid PNG: Yes`);
            console.log();
        } else {
            console.log(`✗ ${file.name} - Invalid PNG format`);
            allValid = false;
        }
    } else {
        console.log(`✗ ${file.name} - File not found`);
        allValid = false;
    }
}

console.log('==================================================');
if (allValid) {
    console.log('Status: All icons present and verified ✓');
} else {
    console.log('Status: Icon verification failed ✗');
}
