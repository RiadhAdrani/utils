import isFalsy from "../isFalsy";
import isFunction from "../isFunction";
import isPrimitiveType from "../isPrimitiveType";

/**
 * Create a new instance from the given object.
 * @param source Source object.
 */
export default function copy<T>(source: T): T {
  if (isFalsy(source) || isPrimitiveType(source) || isFunction(source)) return source;

  const target = (Array.isArray(source) ? [] : {}) as Record<string, string>;

  Object.keys(source as Record<string, string>).forEach((key: string) => {
    target[key] = copy((source as Record<string, string>)[key]);
  });

  return target as T;
}

module.exports = copy;
