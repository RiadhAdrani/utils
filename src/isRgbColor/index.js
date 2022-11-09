const isBlank = require("../isBlank");
const isInInterval = require("../isInInterval");

const RGB_REGEX =
  /^rgb\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}\)$/;
const RGBA_REGEX =
  /^rgba\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}(,( ){0,1}(\d{1})(\.\d+){0,1}){0,1}\)$/;

const isRgbForm = (color) => {
  return isBlank(color) ? false : RGB_REGEX.test(color);
};

const isRgbaForm = (color) => {
  return isBlank(color) ? false : RGBA_REGEX.test(color);
};

const extractDataFromRGB = (color) => {
  if (isRgbaForm(color)) {
    return color
      .slice(5, -1)
      .split(",")
      .map((i) => parseFloat(i.trim()));
  }

  if (isRgbForm(color)) {
    return color
      .slice(4, -1)
      .split(",")
      .map((i) => parseFloat(i.trim()));
  }

  throw "(color) is not of a RGB/RGBA form.";
};

/**
 * @param {string} color
 */
const isRgbColor = (color) => {
  if (isBlank(color)) {
    return false;
  }

  if (isRgbForm(color)) {
    const [r, g, b] = extractDataFromRGB(color);

    for (let c of [r, g, b]) {
      if (!isInInterval(0, c, 256)) return false;
    }

    return true;
  } else if (isRgbaForm(color)) {
    const [r, g, b, a] = extractDataFromRGB(color);

    for (let c of [r, g, b]) {
      if (!isInInterval(0, c, 256)) return false;
    }

    if (a !== undefined && !isInInterval(0, a, 1)) return false;

    return true;
  }

  return false;
};

module.exports = { isRgbColor, isRgbForm, isRgbaForm, extractDataFromRGB, RGBA_REGEX, RGB_REGEX };
