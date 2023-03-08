import forEachKey from "../forEachKey";

/**
 * modifies the target object by copying keys from the source, excluding the provided ones.
 * @param source
 * @param target
 * @param exclude
 */
export default function copyKeys<F extends Object, T extends Object>(
  source: F,
  target: T,
  ...exclude: Array<keyof F>
): void {
  forEachKey((key, value) => {
    if (!exclude.includes(key as keyof F)) {
      target[key as keyof T] = value as T[keyof T];
    }
  }, source as Record<string, unknown>);
}
