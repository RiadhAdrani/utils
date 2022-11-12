import { colorTypes, getColorType } from "../getColorType";
import { convertColor } from "../convertColor";
import { extractDataFromRGB } from "../isRgbColor";
import { extractDataFromHSL } from "../isHslColor";

const normalizeColorToRgbOrThrow = (color: string): string => {
  const rgb = convertColor(color, "rgb");
  const t = getColorType(rgb);

  if (t === "unknown") {
    throw "unable to specify (color) type, maybe it is badly formatted ?";
  }

  return rgb;
};

const normalizeColorToHSLOrThrow = (color: string): string => {
  const rgb = convertColor(color, "hsl");
  const type = getColorType(rgb);

  if (type === "unknown") {
    throw "unable to specify (color) type, maybe it is badly formatted ?";
  }

  return rgb;
};

/**
 * generate a safe color that could be paired with the given one,
 * as a text or background color.
 *
 * @param color source
 * @param light color for dark colors
 * @param dark color for light colors
 */
export const generateContrastSafeColor = (color: string, light = "#fff", dark = "#000") => {
  const c = normalizeColorToRgbOrThrow(color);

  const [r, g, b] = extractDataFromRGB(c);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? dark : light;
};

/**
 * generate a complementary color.
 * @param color source
 * @param type result color type
 */
export const generateComplementaryColor = (color: string, type?: colorTypes) => {
  const c = normalizeColorToHSLOrThrow(color);

  const [_h, _s, _l, _a] = extractDataFromHSL(c);

  const [h, s, l, a] = [(_h + 180) % 360, _s, _l, _a ?? 1];

  const result = `hsla(${h}deg ${s}% ${l}% / ${a})`;

  return convertColor(result, type || "hsl");
};
