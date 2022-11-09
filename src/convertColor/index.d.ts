import { HEX, HSL, RGB } from "../getColorType";

/**
 * convert given `H S L` values to `R G B`
 * @param h hue
 * @param s saturation
 * @param l lightness
 */
export function hslToRgb(h: number, s: number, l: number): [number, number, number];

/**
 * convert given `R G B` values to `H S L`
 * @param r red
 * @param g green
 * @param b blue
 */
export function rgbToHsl(r: number, g: number, b: number): [number, number, number];

/**
 * convert given `R G B` values to `#rrggbbaa`
 * @param r red
 * @param g green
 * @param b blue
 * @param a alpha
 */
export function rgbToHex(r: number, g: number, b: number, a: number): string;

/**
 * convert a given css declaration to another one.
 *
 * supported types : `HEX` | `RGB` | `HSL`
 *
 * @param color source
 * @param to target type
 */
export function convertColor(color: string, to: HEX | HSL | RGB): string;
