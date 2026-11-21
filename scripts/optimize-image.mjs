// Resize and compress a photo for the website.
//
// Usage:
//   node scripts/optimize-image.mjs <input> <output.jpg> [width]
//
// Examples:
//   node scripts/optimize-image.mjs "C:/Photos/IMG_1234.jpg" public/images/rooms/deluxe/desk.jpg
//   node scripts/optimize-image.mjs "C:/Photos/IMG_5678.jpg" public/images/exterior/front.jpg 1920
//
// Width defaults to 1600px (room, hall and gallery photos). Use 1920 for photos
// shown full-width, such as the home page hero slides. Portrait photos use the
// width too, so a tall bathroom photo comes out 1200 x 1800 at width 1200.
// The photo is rotated the right way up, never enlarged, saved as a JPEG at
// quality 78 and stripped of camera metadata (including GPS location).
//
// sharp is installed with Next.js, so no extra install is needed.
import sharp from "sharp";
import { statSync } from "node:fs";

const [input, output, widthArg] = process.argv.slice(2);
if (!input || !output) {
  console.error("Usage: node scripts/optimize-image.mjs <input> <output.jpg> [width]");
  process.exit(1);
}
const width = Number(widthArg) || 1600;

await sharp(input)
  .rotate()
  .resize({ width, withoutEnlargement: true })
  .jpeg({ quality: 78, mozjpeg: true })
  .toFile(output);

const { width: w, height: h } = await sharp(output).metadata();
const kb = Math.round(statSync(output).size / 1024);
console.log(`${output}: ${w} x ${h}, ${kb} KB`);
