/**
 * creates a new object with only the given keys.
 * @param object source.
 * @param keys keys to preserve
 */
export default function pick<T extends Object, K extends keyof T>(
  object: T,
  ...keys: Array<K>
): Pick<T, K> {
  const out = {} as Pick<T, K>;

  Object.keys(object as Record<string, unknown>).forEach((key) => {
    if (keys.includes(key as K)) {
      (out as unknown as T)[key as keyof T] = object[key as keyof T];
    }
  });

  return out;
}
