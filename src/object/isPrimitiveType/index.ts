/**
 * determine if the type of the given object is a primitive.
 * @param object target
 */
export default function isPrimitiveType<T>(object: T): boolean {
  return ["string", "number", "bigint", "boolean", "undefined", "symbol", "null"].includes(
    typeof object
  );
}
