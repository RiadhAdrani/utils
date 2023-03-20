/**
 * find a key value pair from an object satisfying the given callback. returns `undefined` otherwise.
 * @param callback predicate to be executed for each key of the object.
 * @param object source
 * @returns an object with `key` and `value` as keys.
 */
export default function <T extends Object>(
  callback: (key: keyof T, value: T[keyof T]) => boolean,
  object: T
): { key: keyof T; value: T[keyof T] } | undefined {
  for (let k in object) {
    const res = callback(k, object[k]);

    if (res) {
      return { key: k, value: object[k] };
    }
  }

  return undefined;
}
