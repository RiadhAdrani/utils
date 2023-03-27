import isEmpty from "../isEmpty/index.js";

/**
 * return if a string is blank or not.
 *
 * a blank string is the one having no characters after being trimmed.
 * @param value
 */
export default function isBlank(value: string): boolean {
  return typeof value !== "string" || isEmpty(value.trim());
}
