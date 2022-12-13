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
