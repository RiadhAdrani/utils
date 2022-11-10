/**
 * generate an array containing the numbers in `start..end`.
 * @param end ending number.
 * @param start starting point. 0 by default.
 * @throw when start > end.
 */
export default function range(end: number, start = 0): number[] {
  if (typeof end != "number" || typeof start != "number") {
    throw "(end) or (start) is/are not of type number.";
  }

  if (start > end) {
    throw "start number is greater than the end one.";
  }

  const output = [];

  for (let i = start; i < end; i++) {
    output.push(i);
  }

  return output;
}
