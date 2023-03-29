import { isNumber, isString } from "../../object/index.js";

/**
 * Trim and append ellipsis to the end of a string
 * if the length is superior to the maximum provided.
 * @param text input string.
 * @param max max length
 * @param ellipsis defaults to `...`
 */
export default function (text: string, max: number, ellipsis = "..."): string {
  if (!isString(text)) throw "(text) is not a string.";
  if (!isNumber(max)) throw "(max) is not a number.";

  if (text.length <= max) return text;

  return text.substring(0, max) + ellipsis;
}
