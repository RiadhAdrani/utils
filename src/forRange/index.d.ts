/**
 * execute a callback for each index of the range specified.
 *
 * returning a non-`undefined` value will cause the loop to break and return that value as a result.
 * @param start starting number. 0 by default.
 * @param end ending number.
 * @param callback callback for each index.
 * @param step step value.
 */
export default function forRange<T>(
    callback: (index: number) => T,
    end: number,
    start: number,
    step: number
): T | undefined;
