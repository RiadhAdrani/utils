export const HSL_REGEX: RegExp =
  /^hsl\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%\)$/;

export const HSLA_REGEX: RegExp =
  /^hsla\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%( \/ (\d{1,3})(\.\d+){0,1}){0,1}\)$/;

/**
 * check if the given color is of an hsla form
 *
 * `hsla(99deg 99% 99% / 0.99)`
 *
 * note that hue, saturation, lightness and alpha values are not checked.
 * @param color target
 */
export function isHslaForm(color: string): boolean;

/**
 * check if the given color is of an hsl form
 *
 * `hsl(99deg 99% 99%)`
 *
 * note that hue, saturation, lightness values are not checked.
 * @param color target
 */
export function isHslForm(color: string): boolean;

/**
 * Check if the given color is in an HSL or HSLA format:
 * - `hsl(h,s,l)`
 * - `hsla(h,s,l,a)`
 * @param color target
 */
export function isHslColor(color: string): boolean;

/**
 * extract color data from an hsl/a color form.
 *
 * if the color has an invalid type, an error will be thrown.
 *
 * @param color source
 */
export function extractDataFromHSL(color: string): [number, number, number, number | undefined];
