import isBlank from "../isBlank/index.js";

/**
 * capitalize the given string.
 * @param str string
 */
export default function capitalize(str: string): string {
  if (isBlank(str)) {
    throw "(str) is empty or is not a string.";
  }

  return str.substring(0, 1).toUpperCase() + str.substring(1);
}
