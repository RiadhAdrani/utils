const { getColorType } = require("../getColorType");
const { convertColor } = require("../convertColor");
const { extractDataFromRGB } = require("../isRgbColor");

const normalizeColorToRgbOrThrow = (color) => {
  const rgb = convertColor(color, "rgb");
  const t = getColorType(rgb);

  if (t === "unknown") {
    throw "unable to specify (color) type, maybe it is badly formatted ?";
  }

  return rgb;
};

const generateContrastSafeColor = (color, light = "#fff", dark = "#000") => {
  const c = normalizeColorToRgbOrThrow(color);

  const [r, g, b] = extractDataFromRGB(c);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? dark : light;
};

module.exports = { generateContrastSafeColor };
