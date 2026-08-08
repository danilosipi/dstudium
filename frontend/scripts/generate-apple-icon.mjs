import sharp from "sharp";
import { statSync } from "fs";

const size = 180;
const out = "src/app/apple-icon.png";

const svg = Buffer.from(`<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#050816"/>
  <defs>
    <linearGradient id="d-mark-stroke" x1="8" y1="6" x2="42" y2="42">
      <stop stop-color="#5EA2FF"/>
      <stop offset="1" stop-color="#3B5BFF"/>
    </linearGradient>
    <radialGradient id="d-mark-core" cx="0" cy="0" r="1" gradientTransform="translate(26 24) scale(7)">
      <stop stop-color="#49D6FF"/>
      <stop offset="1" stop-color="#3B5BFF"/>
    </radialGradient>
  </defs>
  <path d="M12 8h12c8.837 0 16 7.163 16 16s-7.163 16-16 16H12V8Z" stroke="url(#d-mark-stroke)" stroke-width="2.5"/>
  <path d="M18 15h6c4.97 0 9 4.03 9 9s-4.03 9-9 9h-6" stroke="#5EA2FF" stroke-opacity="0.55" stroke-width="1.75"/>
  <circle cx="26" cy="24" r="5.5" fill="url(#d-mark-core)"/>
  <circle cx="26" cy="24" r="2.2" fill="#F5F7FF" fill-opacity="0.9"/>
</svg>`);

await sharp(svg).png().toFile(out);
const meta = await sharp(out).metadata();
console.log(
  JSON.stringify(
    { out, width: meta.width, height: meta.height, bytes: statSync(out).size },
    null,
    2,
  ),
);
