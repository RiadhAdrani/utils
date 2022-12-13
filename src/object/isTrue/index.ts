export type Condition = boolean | (() => boolean);

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

export function isNumber(o: unknown): boolean {
  return isTrue(typeof o === "number");
}

export function isString(o: unknown): boolean {
  return isTrue(typeof o === "string");
}

export function isArray(o: unknown): boolean {
  return isTrue(Array.isArray(o));
}

export function isObject(o: unknown): boolean {
  return isTrue(typeof o === "object");
}

export function isNull(o: unknown): boolean {
  return isTrue(o === null);
}

export function isDefined(o: unknown): boolean {
  return isTrue(typeof o !== "undefined");
}
