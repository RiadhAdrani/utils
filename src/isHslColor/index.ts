import isBlank from "../isBlank";
import isInInterval from "../isInInterval";

/**
 * generate an hsla color
 * @param h hue
 * @param s saturation
 * @param l lightness
 * @param a alpha
 */
export function hsla(h: number, s: number, l: number, a = 1): string {
  if (!isInInterval(0, h, 360)) throw "(hue) should be a number between 0 and 360";
  if (!isInInterval(0, l, 100)) throw "(lightness) should be a number between 0 and 100";
  if (!isInInterval(0, s, 360)) throw "(saturation) should be a number between 0 and 100";
  if (!isInInterval(0, a, 1)) throw "(alpha) should be a number between 0 and 1";

  return `hsla(${h}deg ${s}% ${l}% / ${a})`;
}

export const HSL_REGEX =
  /^hsl\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%\)$/;

export const HSLA_REGEX =
  /^hsla\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%( \/ (\d{1,3})(\.\d+){0,1}){0,1}\)$/;

/**
 * check if the given color is of an hsl form
 *
 * `hsl(99deg 99% 99%)`
 *
 * note that hue, saturation, lightness values are not checked.
 * @param color target
 */
export function isHslForm(color: string): boolean {
  return isBlank(color) ? false : HSL_REGEX.test(color);
}

/**
 * check if the given color is of an hsla form
 *
 * `hsla(99deg 99% 99% / 0.99)`
 *
 * note that hue, saturation, lightness and alpha values are not checked.
 * @param color target
 */
export function isHslaForm(color: string): boolean {
  return isBlank(color) ? false : HSLA_REGEX.test(color);
}

/**
 * extract color data from an hsl/a color form.
 *
 * if the color has an invalid type, an error will be thrown.
 *
 * @param color source
 */
export function extractDataFromHSL(color: string): number[] {
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
}

/**
 * Check if the given color is in an HSL or HSLA format:
 * - `hsl(h,s,l)`
 * - `hsla(h,s,l,a)`
 * @param color target
 */
export function isHslColor(color: string): boolean {
  if (isBlank(color)) {
    return false;
  }

  if (isHslForm(color)) {
    const [h, s, l] = extractDataFromHSL(color);

    if (360 < h || h < 0) return false;
    if (100 < s || s < 0) return false;
    if (100 < l || l < 0) return false;

    return true;
  } else if (isHslaForm(color)) {
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
}
