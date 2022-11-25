import { getColorType } from "../getType";
import { convertColor } from "../convert";
import { extractDataFromRGB } from "../rgb";
import { extractDataFromHSL, hsla } from "../hsl";
import { Palette, ColorTypes } from "../../../types";
import { isInInterval } from "../../math";

function normalizeColorToRgbOrThrow(color: string): string {
  const rgb = convertColor(color, "rgb");
  const t = getColorType(rgb);

  if (t === "unknown") {
    throw "unable to specify (color) type, maybe it is badly formatted ?";
  }

  return rgb;
}

function normalizeColorToHSLOrThrow(color: string): string {
  const rgb = convertColor(color, "hsl");
  const type = getColorType(rgb);

  if (type === "unknown") {
    throw "unable to specify (color) type, maybe it is badly formatted ?";
  }

  return rgb;
}

/**
 * generates a safe color that could be paired with the given one,
 * as a text or background color.
 *
 * @param color source
 * @param light color for dark colors
 * @param dark color for light colors
 */
export function generateContrastSafeColor(color: string, light = "#fff", dark = "#000") {
  const c = normalizeColorToRgbOrThrow(color);

  const [r, g, b] = extractDataFromRGB(c);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? dark : light;
}

/**
 * generates a complementary color.
 * @param color source
 * @param type result color type
 */
export function generateComplementaryColor(color: string, type?: ColorTypes) {
  const c = normalizeColorToHSLOrThrow(color);

  const [_h, _s, _l, _a] = extractDataFromHSL(c);

  const [h, s, l, a] = [(_h + 180) % 360, _s, _l, _a ?? 1];

  const result = `hsla(${h}deg ${s}% ${l}% / ${a})`;

  return convertColor(result, type || "hsl");
}

/**
 * generates a tonal palette.
 * @param color
 * @param type output colors type
 * @see https://m3.material.io/styles/color/the-color-system/key-colors-tones#6bdb9471-b70d-42c9-8ace-76743c1fff13
 */
export function generateColorTonalPalette(color: string, type?: ColorTypes): Palette {
  const c = normalizeColorToHSLOrThrow(color);

  const palette = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

  const [h, s, , a] = extractDataFromHSL(c);

  const t = type ?? "hsl";

  const colorPalette = {} as Palette;

  palette.forEach((tone) => {
    const colorTone = hsla(h, s, tone, a ?? 1);

    colorPalette[tone as keyof Palette] = convertColor(colorTone, t);
  });

  return colorPalette;
}

/**
 * generate the same color with a modified opacity.
 * @param color source
 * @param opacity opacity
 * @param type output color type
 */
export function changeColorOpacity(color: string, opacity: number, type?: ColorTypes) {
  const c = normalizeColorToHSLOrThrow(color);

  if (!isInInterval(0, opacity, 1)) throw "(opacity) should be a number between 0 and 1.";

  const [h, s, l] = extractDataFromHSL(c);

  return convertColor(hsla(h, s, l, opacity), type ?? "hex");
}
