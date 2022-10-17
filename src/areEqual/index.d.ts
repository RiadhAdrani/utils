/**
 * perform deep comparison of two objects of any type.
 * @param obj1 first object.
 * @param obj2 second object.
 * @param depth maximum comparison depth, `10` by default.
 * This value improve performance with large object and circular dependencies
 */
export default function areEqual<T, K>(obj1: T, obj2: K, depth: number): boolean;
