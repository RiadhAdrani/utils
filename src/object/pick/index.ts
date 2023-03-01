/**
 * creates a new object with only the given keys.
 * @param object source.
 * @param keys keys to preserve
 */
export default function pick<T>(object: T, ...keys: Array<keyof T>): Pick<T, typeof keys[number]> {
  const out = {} as Pick<T, typeof keys[number]>;

  Object.keys(object as Record<string, unknown>).forEach((key) => {
    if (keys.includes(key as keyof T)) {
      out[key as keyof T] = object[key as keyof T];
    }
  });

  return out as Pick<T, typeof keys[number]>;
}
