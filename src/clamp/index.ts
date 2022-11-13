/**
 * clamp a number between two values.
 * @param min minimum
 * @param n number
 * @param max maximum
 */
export default function (min: number, n: number, max: number) {
  if (typeof min !== "number") throw "(min) is not a number";
  if (typeof max !== "number") throw "(max) is not a number";
  if (typeof n !== "number") throw "(n) is not a number";
  if (min > max) throw "(min) is greater than (max)";

  return Math.min(Math.max(n, min), max);
}
