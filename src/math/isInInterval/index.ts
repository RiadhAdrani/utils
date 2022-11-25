/**
 * Check if the given value is within the [`min`,`max`] interval.
 * @param min minimum value (included)
 * @param value tested value
 * @param max maximum value (included)
 */
export default function (min: number, value: number, max: number): boolean {
  if (typeof min !== "number") throw "(min) is not a number.";
  if (typeof max !== "number") throw "(max) is not a number.";
  if (typeof value !== "number") throw "(value) is not a number.";
  if (min > max) throw "(min) is greater than (max).";

  return min <= value && value <= max;
}
