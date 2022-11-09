export type HEX = "hex";
export type HSL = "hsl";
export type RGB = "rgb";
export type UNKNOWN = "unknown";

/**
 * Try to guess the correct screen color type :
 * `hex`, `hsl`, `rgb` or `unknown`
 * @param color target
 */
export function getColorType(color: string): HEX | HSL | RGB | UNKNOWN;
