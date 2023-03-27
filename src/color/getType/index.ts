import { ColorType } from "../index.js";
import { isHexColor } from "../hex/index.js";
import { isHslColor } from "../hsl/index.js";
import { isRgbColor } from "../rgb/index.js";

export const HEX = "hex";
export const HSL = "hsl";
export const RGB = "rgb";
export const UNKNOWN = "unknown";

/**
 * Try to guess the correct screen color type :
 * `hex`, `hsl`, `rgb` or `unknown`
 * @param color target
 */
export function getColorType(color: string): ColorType | "unknown" {
  return isHexColor(color) ? HEX : isHslColor(color) ? HSL : isRgbColor(color) ? RGB : UNKNOWN;
}
