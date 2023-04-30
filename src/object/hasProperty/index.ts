/**
 * check if the given object has the named property.
 * @param object target object
 * @param property property name
 */
export default function hasProperty(object: unknown, property: string | number): boolean {
  if (
    ["string", "number", "boolean", "bigint", "undefined", "null", "symbol"].includes(typeof object)
  )
    return false;

  if ([null, undefined].includes(object as null)) return false;

  return Object.prototype.hasOwnProperty.call(object, property);
}
