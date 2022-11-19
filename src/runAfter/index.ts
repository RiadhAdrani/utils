import { isFunction } from "../isFunction";

/**
 * execute a timeout callback as an asynchronous function.
 * @param time delay in milliseconds.
 * @param callback function to be called.
 */
export default async function runAfter<T>(time: number, callback: () => T): Promise<T | void> {
  return new Promise((resolve) => {
    if (typeof time !== "number" || time < 0) {
      throw "(time) is not valid.";
    }
    if (!isFunction(callback)) {
      throw "(callback) is not a function.";
    }

    setTimeout(() => {
      resolve(callback());
    }, time);
  });
}
