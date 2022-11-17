import isBlank from "../isBlank";
import isInInterval from "../isInInterval";

/**
 * generate an rgba color :
 *
 * `rgba(255,255,255,1)`
 *
 * @param r red
 * @param g green
 * @param b blue
 * @param a alpha
 */
export function rgba(r: number, g: number, b: number, a = 1): string {
  if (!isInInterval(0, r, 255)) throw "(red) should be a number between 0 and 255";
  if (!isInInterval(0, b, 255)) throw "(green) should be a number between 0 and 255";
  if (!isInInterval(0, g, 255)) throw "(blue) should be a number between 0 and 255";
  if (!isInInterval(0, a, 1)) throw "(alpha) should be a number between 0 and 1";

  return `rgba(${r},${g},${b},${a})`;
}

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
export function isRgbForm(color: string): boolean {
  return isBlank(color) ? false : RGB_REGEX.test(color);
}

/**
 * check if the given color is of an rgba form
 *
 * `rgba(255, 255, 255, 0.99)`
 *
 * note that red, green, blue and alpha values are not checked.
 * @param color target
 */
export function isRgbaForm(color: string): boolean {
  return isBlank(color) ? false : RGBA_REGEX.test(color);
}

/**
 * extract color data from an rgb/a color form.
 *
 * if the color has an invalid type, an error will be thrown.
 *
 * @param color source
 */
export function extractDataFromRGB(color: string): number[] {
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
}

/**
 * Check if the given color is in an RGB or RGBA format:
 * - `rgb(r,g,b)`
 * - `rgba(r,g,b,a)`
 * @param color
 */
export function isRgbColor(color: string): boolean {
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
}
