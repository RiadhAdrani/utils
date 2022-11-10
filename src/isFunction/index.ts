/**
 * check if the given object is a function.
 * @param object to be tested.
 */
export default <T>(object: T): boolean => {
  return typeof object === "function";
};
