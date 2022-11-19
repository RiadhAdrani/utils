// https://css-tricks.com/converting-color-spaces-in-javascript//

import { ColorTypes } from "../../types";
import { getColorType, HEX, HSL, RGB, UNKNOWN } from "../getColorType";
import { extractDataFromHSL } from "../isHslColor";
import { extractDataFromRGB } from "../isRgbColor";

/**
 * convert given `H S L` values to `R G B`
 * @param h hue
 * @param s saturation
 * @param l lightness
 */
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  h = h % 360;

  const c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b];
}

/**
 * convert given `R G B` values to `H S L`
 * @param r red
 * @param g green
 * @param b blue
 */
export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  const cMin = Math.min(r, g, b),
    cMax = Math.max(r, g, b),
    delta = cMax - cMin;

  let h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cMax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cMax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cMax + cMin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100

  s = +(s * 100).toFixed(2);
  l = +(l * 100).toFixed(2);

  return [round(h), round(s), round(l)];
}

/**
 * convert given `R G B` values to `#rrggbbaa`
 * @param r red
 * @param g green
 * @param b blue
 * @param a alpha
 */
export function rgbToHex(r: number, g: number, b: number, a = 1): string {
  function formatHex(c: number) {
    const hex = Math.round(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  return "#" + formatHex(r) + formatHex(g) + formatHex(b) + formatHex(a * 255);
}

const round = (n: number): number => {
  return Math.round(n * 100) / 100;
};

/**
 * convert a given css declaration to another one.
 *
 * supported types : `HEX` | `RGB` | `HSL`
 *
 * @param color source
 * @param to target type
 */
export function convertColor(color: string, to: ColorTypes): string {
  const type = getColorType(color);

  if (type === UNKNOWN) {
    return color;
  }
  if (![HEX, HSL, RGB].includes(to)) return color;
  if (to === type) return color;

  let [r, g, b, a] = [0, 0, 0, 1];

  if (type === HEX) {
    const c = color.substring(1);
    const l = c.length;

    if (l === 3) {
      r = parseInt(c[0] + c[0], 16);
      g = parseInt(c[1] + c[1], 16);
      b = parseInt(c[2] + c[2], 16);
    } else if (l >= 6) {
      r = parseInt(c.substring(0, 2), 16);
      g = parseInt(c.substring(2, 4), 16);
      b = parseInt(c.substring(4, 6), 16);

      if (l === 8) {
        a = round(parseInt(c.substring(6), 16) / 256);
      }
    }
  } else if (type === HSL) {
    const [h, s, l, _a] = extractDataFromHSL(color);

    if (_a !== undefined) {
      a = _a;
    }

    [r, g, b] = hslToRgb(h, s, l);
  } else if (type === RGB) {
    const [_r, _g, _b, _a] = extractDataFromRGB(color);

    if (_a !== undefined) {
      a = _a;
    }

    [r, g, b] = [_r, _g, _b];
  }

  if (to === RGB) {
    return `rgba(${r},${g},${b},${a})`;
  } else if (to === HSL) {
    const [h, s, l] = rgbToHsl(r, g, b);
    return `hsla(${h}deg ${s}% ${l}% / ${a})`;
  } else if (to === HEX) {
    return rgbToHex(r, g, b, a);
  }

  return color;
}
