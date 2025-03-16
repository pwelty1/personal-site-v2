export function closestColor(targetColor: string, colorPalette: string[]) {
  let closest = "#000000";
  let minDistance = Infinity;

  const targetRGB = hexToRgb(targetColor);

  for (const paletteColor of colorPalette) {
    const paletteRGB = hexToRgb(paletteColor);
    const distance = euclideanDistance(targetRGB, paletteRGB);

    if (distance < minDistance) {
      minDistance = distance;
      closest = paletteColor;
    }
  }
  return closest;
}

export function hexToRgb(hex: string): RGB {
  const sanitizedHex = hex.replace("#", "");
  const r = parseInt(sanitizedHex.substring(0, 2), 16);
  const g = parseInt(sanitizedHex.substring(2, 4), 16);
  const b = parseInt(sanitizedHex.substring(4, 6), 16);
  return { r, g, b };
}

type RGB = { r: number; g: number; b: number };

function euclideanDistance(rgb1: RGB, rgb2: RGB) {
  const rDiff = rgb2.r - rgb1.r;
  const gDiff = rgb2.g - rgb1.g;
  const bDiff = rgb2.b - rgb1.b;
  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
}
