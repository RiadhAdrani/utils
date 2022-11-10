import isBlank from "../isBlank";
import isInInterval from "../isInInterval";

export const RGB_REGEX =
  /^rgb\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}\)$/;

export const RGBA_REGEX =
  /^rgba\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}(,( ){0,1}(\d{1})(\.\d+){0,1}){0,1}\)$/;

/**
 * check if the given color is of an rgb form
 *
 * `rgb(255, 255, 255)`
 *
 * note that red, green and blue values are not checked
 * @param color target
 */
export const isRgbForm = (color: string): boolean => {
  return isBlank(color) ? false : RGB_REGEX.test(color);
};

/**
 * check if the given color is of an rgba form
 *
 * `rgba(255, 255, 255, 0.99)`
 *
 * note that red, green, blue and alpha values are not checked.
 * @param color target
 */
export const isRgbaForm = (color: string): boolean => {
  return isBlank(color) ? false : RGBA_REGEX.test(color);
};

/**
 * extract color data from an rgb/a color form.
 *
 * if the color has an invalid type, an error will be thrown.
 *
 * @param color source
 */
export const extractDataFromRGB = (color: string): number[] => {
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
 * Check if the given color is in an RGB or RGBA format:
 * - `rgb(r,g,b)`
 * - `rgba(r,g,b,a)`
 * @param color
 */
export const isRgbColor = (color: string): boolean => {
  if (isBlank(color)) {
    return false;
  }

  if (isRgbForm(color)) {
    const [r, g, b] = extractDataFromRGB(color);

    for (const c of [r, g, b]) {
      if (!isInInterval(0, c, 256)) return false;
    }

    return true;
  } else if (isRgbaForm(color)) {
    const [r, g, b, a] = extractDataFromRGB(color);

    for (const c of [r, g, b]) {
      if (!isInInterval(0, c, 256)) return false;
    }

    if (a !== undefined && !isInInterval(0, a, 1)) return false;

    return true;
  }

  return false;
};
