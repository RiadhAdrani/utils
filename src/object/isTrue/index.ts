export type Condition = boolean | (() => boolean);

/**
 * checks if the condition provided is true.
 * @param condition comparison or function.
 */
export function isTrue(condition: Condition): boolean {
  if (typeof condition === "boolean") {
    return condition;
  }

  if (typeof condition !== "function") {
    throw "(condition) should be a boolean or a function";
  }

  const res = condition();

  if (typeof res !== "boolean") {
    throw "(condition) result is not a boolean.";
  }

  return res;
}

/**
 * checks if the object provided is a number.
 * @param o
 */
export function isNumber(o: unknown): boolean {
  return isTrue(typeof o === "number");
}

/**
 * checks if the object provided is a string.
 * @param o
 */
export function isString(o: unknown): boolean {
  return isTrue(typeof o === "string");
}

/**
 * checks if the object provided is an array.
 * @param o
 */
export function isArray(o: unknown): boolean {
  return isTrue(Array.isArray(o));
}

/**
 * checks if the object provided is an object.
 * @param o
 */
export function isObject(o: unknown): boolean {
  return isTrue(typeof o === "object");
}

/**
 * checks if the object provided is null.
 * @param o
 */
export function isNull(o: unknown): boolean {
  return isTrue(o === null);
}

/**
 * checks if the object provided is defined, different of `undefined` and `null`.
 *
 * @param o
 */
export function isDefined(o: unknown): boolean {
  return isTrue(!isNull(o) && !isUndefined(o));
}

/**
 * checks if the object provided is `undefined`.
 *
 * @param o
 */
export function isUndefined(o: unknown): boolean {
  return isTrue(typeof o === "undefined");
}

/**
 * checks if the object provided is boolean.
 *
 * @param o
 */
export function isBoolean(o: unknown): boolean {
  return isTrue(typeof o === "boolean");
}
