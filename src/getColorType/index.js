const isHexColor = require("../isHexColor");
const { isHslColor } = require("../isHslColor");
const { isRgbColor } = require("../isRgbColor");

const HEX = "hex";
const HSL = "hsl";
const RGB = "rgb";
const UNKNOWN = "unknown";

const getColorType = (color) => {
  return isHexColor(color) ? HEX : isHslColor(color) ? HSL : isRgbColor(color) ? RGB : UNKNOWN;
};

module.exports = { getColorType, HEX, HSL, RGB, UNKNOWN };
