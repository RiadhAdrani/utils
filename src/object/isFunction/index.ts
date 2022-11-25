/**
 * check if the given object is a function.
 * @param object to be tested.
 */
export default function isFunction(object: unknown): boolean {
  return typeof object === "function";
}
