const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const svgPath = path.join(__dirname, '../public/icon.svg')
const svgBuffer = fs.readFileSync(svgPath)

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 },
  { name: 'og-image.png', size: 1200 },
]

async function generate() {
  for (const { name, size } of sizes) {
    const width = name === 'og-image.png' ? 1200 : size
    const height = name === 'og-image.png' ? 630 : size
    await sharp(svgBuffer)
      .resize(width, height, { fit: 'contain', background: { r: 15, g: 23, b: 42, alpha: 1 } })
      .png()
      .toFile(path.join(__dirname, '../public', name))
    console.log(`Generated ${name}`)
  }
}

generate()
