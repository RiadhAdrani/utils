import { Callback, ReactiveArray, cast } from "../../index.js";
import { forEachKey, isArray, isObject } from "../index.js";

/**
 * creates a proxy reactive object,
 * that will trigger the `onValueChanged` when an internal value have changed.
 * @param object target object
 * @param onValueChanged callback
 * @returns proxy object
 */
const createReactive = <T extends object>(object: T, onValueChanged: Callback): T => {
  forEachKey((key, value) => {
    if (isObject(value)) {
      (object[key] as unknown) = createReactive(value as object, onValueChanged);
    }
  }, object);

  let proxied = new Proxy<T>(object, {
    get: (current, key) => {
      return (current as Record<string | symbol, unknown>)[key];
    },
    set: (target, key, newValue) => {
      let transformed: unknown = newValue;

      if (isObject(newValue)) {
        transformed = createReactive(newValue, onValueChanged);
      }

      cast<Record<string | symbol, unknown>>(target)[key] = transformed;

      onValueChanged();

      return true;
    },
  });

  if (isArray(proxied)) {
    proxied = new ReactiveArray(proxied as Array<unknown>, onValueChanged) as T;
  }

  return proxied;
};

export default createReactive;
