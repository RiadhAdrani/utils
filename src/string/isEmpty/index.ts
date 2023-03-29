import { isString } from "../../index.js";

/**
 * return if a string is empty or not.
 *
 * an empty string is the one having no characters.
 * @param value
 */
export default function isEmpty(value: string): boolean {
  return !isString(value) || value.length === 0;
}
