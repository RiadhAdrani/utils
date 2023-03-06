import { forRange } from "../../iteration";

/**
 * divide an array into `segments` (smaller arrays).
 * @param array source
 * @param segmentLength segment length
 */
export default function <T>(array: Array<T>, segmentLength: number): Array<Array<T>> {
  const output: Array<Array<T>> = [];

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
