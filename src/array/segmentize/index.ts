import { forRange } from "../../iteration";

/**
 * divide an array into `segments` (smaller arrays).
 * @param array source
 * @param segmentLength segment length
 */
export default function <T>(array: T[], segmentLength: number): Array<T[]> {
  const output: T[][] = [];

  forRange(
    (index) => {
      output.push(array.slice(index, index + segmentLength));
    },
    array.length,
    0,
    segmentLength
  );

  return output;
}
