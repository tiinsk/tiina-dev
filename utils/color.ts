export type RGBColor = { r: number; g: number; b: number };

export const hex2rgb = (hex: string): RGBColor => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
};

/* Function to blend two colors by a given ratio. rgb1Ratio and rgb2Ratio can be any number.
 * For example, if middle gray color is wanted,
 * rgb1 = { r: 0, g: 0, b: 0 },
 * rgb1Ratio1 = 0.5,
 * rgb2 = { r: 255, g: 255, b: 255 },
 * and rgb2Ratio 0.5
 * => result { r: 128, g: 128, b: 128 }
 * */
export const blendColors = (
  rgb1: RGBColor,
  rgb1Ratio: number,
  rgb2: RGBColor,
  rgb2Ratio: number
) => {
  const totalRatio = rgb1Ratio + rgb2Ratio;

  const r = Math.round((rgb1.r * rgb1Ratio + rgb2.r * rgb2Ratio) / totalRatio);
  const g = Math.round((rgb1.g * rgb1Ratio + rgb2.g * rgb2Ratio) / totalRatio);
  const b = Math.round((rgb1.b * rgb1Ratio + rgb2.b * rgb2Ratio) / totalRatio);
  return { r, g, b };
};
