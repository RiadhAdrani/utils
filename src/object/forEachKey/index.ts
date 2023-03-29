import isFunction from "../isFunction/index.js";
import { isObject } from "../isTrue/index.js";

/**
 * Run a callback for each key in a Record.
 * @param callback to be executed.
 * @param object source.
 */
export default function <T extends object>(
  callback: (key: keyof T, value: T[keyof T], index: number) => void,
  object: T
) {
  if (!isFunction(callback)) {
    throw `Expected a function for (callback) but found (${typeof object}).`;
  }

  if (!isObject(object)) {
    throw `Expected an object for (object) but found (${typeof object}).`;
  }

  Object.keys(object).forEach((key, index) =>
    callback(key as keyof T, object[key as keyof T], index)
  );
}
