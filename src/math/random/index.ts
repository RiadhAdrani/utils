import { isNumber } from "../../object";

/**
 * generate a random number in a given interval.
 * @param min minimum value.
 * @param max maximum value, exclusive.
 * @param float allow float values. `false` by default.
 */
export default function (min: number, max: number, float = false): number {
  if (!isNumber(min)) throw "(min) is not a number";
  if (!isNumber(max)) throw "(max) is not a number";

  if (min > max) {
    throw "(min) is greater than (max).";
  }

  if (min === max) {
    return min;
  }

  const rnd = Math.random() * (max - min) + min;

  return float ? Math.floor(rnd) : rnd;
}
