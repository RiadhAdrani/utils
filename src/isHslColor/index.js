const isBlank = require("../isBlank");

const HSL_REGEX = /^hsl\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%\)$/;
const HSLA_REGEX =
  /^hsla\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%( \/ (\d{1,3})(\.\d+){0,1}){0,1}\)$/;
const isHslForm = (color) => {
  return isBlank(color) ? false : HSL_REGEX.test(color);
};

const isHslaForm = (color) => {
  return isBlank(color) ? false : HSLA_REGEX.test(color);
};

const extractDataFromHSL = (color) => {
  if (isHslaForm(color)) {
    return color
      .slice(5, -1)
      .replace("%", "")
      .replace("deg", "")
      .replace("/", "")
      .replace("  ", " ")
      .split(" ")
      .map((i) => parseFloat(i.trim()));
  }

  if (isHslForm(color)) {
    return color
      .slice(4, -1)
      .replace("%", "")
      .replace("deg", "")
      .replace("/", "")
      .split(" ")
      .map((i) => parseFloat(i.trim()));
  }

  throw "(color) is not of a HSL/HSLA form.";
};

const isHslColor = (color) => {
  if (isBlank(color)) {
    return false;
  }

  const hslRegEx =
    /^hsl\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%\)$/;
  const hslaRegEx =
    /^hsla\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%( \/ (\d{1,3})(\.\d+){0,1}){0,1}\)$/;

  if (hslRegEx.test(color)) {
    const [h, s, l] = extractDataFromHSL(color);

    if (360 < h || h < 0) return false;
    if (100 < s || s < 0) return false;
    if (100 < l || l < 0) return false;

    return true;
  } else if (hslaRegEx.test(color)) {
    const [h, s, l, a] = extractDataFromHSL(color);

    if (360 < h || h < 0) return false;
    if (100 < s || s < 0) return false;
    if (100 < l || l < 0) return false;

    if (a !== undefined && (1 < a || a < 0)) {
      return false;
    }

    return true;
  }

  return false;
};

module.exports = {
  HSLA_REGEX,
  HSL_REGEX,
  isHslForm,
  isHslaForm,
  extractDataFromHSL,
  isHslColor,
};
