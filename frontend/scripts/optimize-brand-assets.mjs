import sharp from "sharp";
import { statSync, writeFileSync } from "fs";

const report = [];

async function optimize({
  input,
  output,
  width,
  quality = 82,
  effort = 6,
}) {
  const before = statSync(input).size;
  const beforeMeta = await sharp(input).metadata();

  let pipeline = sharp(input);
  if (width && beforeMeta.width && beforeMeta.width > width) {
    pipeline = pipeline.resize({
      width,
      withoutEnlargement: true,
    });
  }

  await pipeline.webp({ quality, effort, alphaQuality: 90 }).toFile(output);

  const after = statSync(output).size;
  const afterMeta = await sharp(output).metadata();
  const entry = {
    input,
    output,
    beforeBytes: before,
    afterBytes: after,
    reductionPct: Number((((before - after) / before) * 100).toFixed(1)),
    beforeDim: `${beforeMeta.width}x${beforeMeta.height}`,
    afterDim: `${afterMeta.width}x${afterMeta.height}`,
    hasAlpha: afterMeta.hasAlpha,
  };
  report.push(entry);
  console.log(JSON.stringify(entry, null, 2));
}

// Logo: display ~236px * scale 2.05 ≈ 480px useful; 2x retina ≈ 960px.
// Source 1536 — resize to 1024 keeps headroom, cuts weight.
await optimize({
  input: "public/brand/dstudium-logo.png",
  output: "public/brand/dstudium-logo.webp",
  width: 1024,
  quality: 86,
});

// Hero LCP: keep full width 1993 for sharpness, WebP quality high.
await optimize({
  input: "public/brand/dstudium-hero-wide.png",
  output: "public/brand/dstudium-hero-wide.webp",
  quality: 80,
});

// Mobile-oriented narrower decode candidate (~1280 wide) for sizes/srcset strategy.
await optimize({
  input: "public/brand/dstudium-hero-wide.png",
  output: "public/brand/dstudium-hero-md.webp",
  width: 1280,
  quality: 78,
});

writeFileSync(
  "D:/Drive/Projetos/_dstudium/site/repo/frontend/.perf-assets-after.json",
  JSON.stringify(report, null, 2),
);
