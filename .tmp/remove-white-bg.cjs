const sharp = require("sharp");
const path = require("path");

const jobs = [
  {
    input: "C:/Users/dangt/Downloads/System Validation.jpg",
    output: "src/assets/skills/system-validation.png",
    whiteThreshold: 238,
    softness: 14,
  },
  {
    input: "C:/Users/dangt/Downloads/Communication.webp",
    output: "src/assets/skills/communication.png",
    whiteThreshold: 238,
    softness: 16,
  },
  {
    input: "C:/Users/dangt/Downloads/Teamwork.png",
    output: "src/assets/skills/teamwork.png",
    whiteThreshold: 245,
    softness: 8,
  },
];

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const alphaForPixel = (r, g, b, a, threshold, softness) => {
  const brightness = (r + g + b) / 3;
  if (brightness <= threshold) return a;
  const fadeEnd = threshold + softness;
  const ratio = clamp((fadeEnd - brightness) / Math.max(softness, 1), 0, 1);
  return Math.round(a * ratio);
};

async function processJob(job) {
  const image = sharp(job.input).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    data[i + 3] = alphaForPixel(r, g, b, a, job.whiteThreshold, job.softness);
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    },
  })
    .png()
    .toFile(job.output);

  console.log(`Processed ${path.basename(job.input)} -> ${job.output}`);
}

Promise.all(jobs.map(processJob)).catch((error) => {
  console.error(error);
  process.exit(1);
});
