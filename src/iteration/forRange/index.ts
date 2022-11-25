/**
 * execute a callback for each index of the range specified.
 *
 * returning a non-`undefined` value will cause the loop to break and return that value as a result.
 * @param  start starting number. 0 by default.
 * @param  end ending number.
 * @param callback callback for each index.
 */
export default function forRange<T = unknown>(
  callback: (index: number) => void | T,
  end: number,
  start = 0,
  step = 1
): T | undefined {
  if (
    typeof callback != "function" ||
    typeof end != "number" ||
    typeof start != "number" ||
    typeof step != "number"
  )
    return;

  for (let i = start; i < end; i = i + step) {
    const res = callback(i);

    if (res != undefined) return res;
  }
}
