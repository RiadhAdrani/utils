import { StringWithAutoComplete } from "../../index.js";
import forEachKey from "../forEachKey/index.js";

/**
 * modifies the target object by copying keys from the source, excluding the provided ones.
 * @param source
 * @param target
 * @param exclude
 */
export default function copyKeys<F extends object, T extends object>(
  source: F,
  target: T,
  ...exclude: Array<StringWithAutoComplete<keyof F>>
): void {
  forEachKey((key, value) => {
    if (!exclude.includes(key as keyof F)) {
      target[key as keyof T] = value as T[keyof T];
    }
  }, source as Record<string, unknown>);
}
