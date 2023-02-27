import isFunction from "../isFunction";
import { isObject } from "../isTrue";

/**
 * Run a callback for each key in a Record.
 * @param callback to be executed.
 * @param object source.
 */
export default function <T>(
  callback: (key: string, value: T, index: number) => void,
  object: Record<string, T>
) {
  if (!isFunction(callback)) {
    throw `Expected a function for (callback) but found (${typeof object}).`;
  }

  if (!isObject(object)) {
    throw `Expected an object for (object) but found (${typeof object}).`;
  }

  Object.keys(object).forEach((key, index) => callback(key, object[key], index));
}
