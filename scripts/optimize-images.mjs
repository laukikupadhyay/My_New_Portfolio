/**
 * Generates responsive, modern-format variants of the source portrait.
 * Run with: npm run optimize:images
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = resolve(root, 'src/assets/profilePhoto.png');
const OUT_DIR = resolve(root, 'src/assets/generated');

/* The portrait renders at 360 CSS px at most, so 400/800 covers 1x and 2x. */
const WIDTHS = [400, 800];

await mkdir(OUT_DIR, { recursive: true });

const meta = await sharp(SOURCE).metadata();
console.log(`source  ${meta.width}x${meta.height}  ${(meta.size / 1024).toFixed(0)} KB`);

for (const width of WIDTHS) {
  for (const [format, options] of [
    ['avif', { quality: 58, effort: 6 }],
    ['webp', { quality: 76 }],
    ['jpeg', { quality: 80, mozjpeg: true }],
  ]) {
    const file = resolve(OUT_DIR, `portrait-${width}.${format === 'jpeg' ? 'jpg' : format}`);
    const info = await sharp(SOURCE)
      .resize({ width, withoutEnlargement: true })
      .flatten({ background: '#0B0B13' })   // drop alpha; the frame is dark anyway
      .toFormat(format, options)
      .toFile(file);
    console.log(`  ${format.padEnd(4)} ${String(width).padStart(4)}w  ${(info.size / 1024).toFixed(1)} KB`);
  }
}

console.log('done');
