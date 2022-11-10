import isHexColor from "../isHexColor";
import { isHslColor } from "../isHslColor";
import { isRgbColor } from "../isRgbColor";

export const HEX = "hex";
export const HSL = "hsl";
export const RGB = "rgb";
export const UNKNOWN = "unknown";

export type colorTypes = "hex" | "hsl" | "rgb";

/**
 * Try to guess the correct screen color type :
 * `hex`, `hsl`, `rgb` or `unknown`
 * @param color target
 */
export const getColorType = (color: string): colorTypes | "unknown" => {
  return isHexColor(color) ? HEX : isHslColor(color) ? HSL : isRgbColor(color) ? RGB : UNKNOWN;
};
