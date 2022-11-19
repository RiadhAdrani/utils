/**
 * check if the given object is a function.
 * @param object to be tested.
 */
export function isFunction(object: unknown): boolean {
  return typeof object === "function";
}
