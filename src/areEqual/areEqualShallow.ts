/**
 * Perform a shallow comparison between two objects.
 * @param obj1 first object
 * @param obj2 second object
 */
export default function areShallowEqual<T, K>(obj1: T, obj2: K): boolean | undefined {
  /**
   * compare the two object with the predefined Object.is
   */
  if (Object.is(obj1, obj2)) return true;

  /**
   * making sure both object are of type "object"
   */
  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null)
    return false;
}
