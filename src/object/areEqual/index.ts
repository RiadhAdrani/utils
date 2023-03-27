import areShallowEqual from "./areEqualShallow.js";

/**
 * perform deep comparison of two objects of any type.
 * @param obj1 first object.
 * @param obj2 second object.
 * @param depth maximum comparison depth, `10` by default. This value improve performance with large object and circular dependencies
 * @returns
 */
export default function areEqual<T, K>(obj1: T, obj2: K, depth = 10): boolean {
  const shallowComparison = areShallowEqual(obj1, obj2);

  if (typeof shallowComparison === "boolean") return shallowComparison;

  const key1 = Object.keys(obj1 as object);
  const key2 = Object.keys(obj2 as object);

  /**
   * compare the number of keys
   */
  if (key1.length !== key2.length) return false;

  /**
   * compare the keys identifier
   */
  if ([...key1].sort().join("") !== [...key2].sort().join("")) return false;

  /**
   * recursively compare each key value.
   */
  for (let i = 0; i < key1.length; i++) {
    const o1 = (obj1 as Record<string, string>)[key1[i]];
    const o2 = (obj2 as Record<string, string>)[key1[i]];

    const shallowComparison = areShallowEqual(o1, o2);

    if (shallowComparison === false) return false;

    if (depth > 0) {
      /**
       * We have an object as the value,
       * we recursively compare them.
       */
      if (!areEqual(o1, o2, depth - 1)) return false;
    }
  }

  return true;
}
