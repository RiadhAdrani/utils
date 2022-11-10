export const HEX = "hex";
export const HSL = "hsl";
export const RGB = "rgb";
export const UNKNOWN = "unknown";

export type colorTypes = HEX | HSL | RGB;

/**
 * Try to guess the correct screen color type :
 * `hex`, `hsl`, `rgb` or `unknown`
 * @param color target
 */
export function getColorType(color: string): HEX | HSL | RGB | UNKNOWN;
