import forEachKey from "../forEachKey";

/**
 * modifies the target object by copying keys from the source, excluding the provided ones.
 * @param source
 * @param target
 * @param exclude
 */
export default function copyKeys<
  F extends Record<string | number, unknown>,
  T extends Record<string | number, unknown>
>(source: F, target: T, ...exclude: Array<keyof F>): void {
  forEachKey((key, value) => {
    if (!exclude.includes(key)) {
      target[key as keyof T] = value as T[keyof T];
    }
  }, source);
}
