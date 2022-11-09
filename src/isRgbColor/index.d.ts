export const RGB_REGEX =
  /^rgb\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}\)$/;

export const RGBA_REGEX =
  /^rgba\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}(,( ){0,1}(\d{1})(\.\d+){0,1}){0,1}\)$/;

/**
 * check if the given color is of an rgba form
 *
 * `rgba(255, 255, 255, 0.99)`
 *
 * note that red, green, blue and alpha values are not checked.
 * @param color target
 */
export function isRgbaForm(color: string): boolean;

/**
 * check if the given color is of an rgb form
 *
 * `rgb(255, 255, 255)`
 *
 * note that red, green and blue values are not checked
 * @param color target
 */
export function isRgbForm(color: string): boolean;

/**
 * extract color data from an rgb/a color form.
 *
 * if the color has an invalid type, an error will be thrown.
 *
 * @param color source
 */
export function extractDataFromRGB(color: string): [number, number, number, number | undefined];

/**
 * Check if the given color is in an RGB or RGBA format:
 * - `rgb(r,g,b)`
 * - `rgba(r,g,b,a)`
 * @param color
 */
export function isRgbColor(color: string): boolean;
