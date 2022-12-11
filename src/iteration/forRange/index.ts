import { isFunction } from "../../object";

/**
 * execute a callback for each index of the range specified.
 *
 * returning a non-`undefined` value will cause the loop to break and return that value as a result.
 * @param  start starting number. 0 by default.
 * @param  end ending number.
 * @param callback callback for each index.
 * @param step stepping number, 1 by default.
 */
export default function forRange<T = unknown>(
  callback: (index: number) => void | T,
  end: number,
  start = 0,
  step = 1
): T | undefined {
  if (!isFunction(callback)) throw "(callback) is not a function.";

  if (typeof end != "number") throw "(end) is not a number.";

  if (typeof start != "number") throw "(start) is not a number.";

  if (typeof step != "number") throw "(step) is not a number.";

  for (let i = start; i < end; i = i + step) {
    const res = callback(i);

    if (res != undefined) return res;
  }
}
