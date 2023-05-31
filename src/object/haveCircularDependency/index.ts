import { getType } from "../index.js";

/**
 * detects if the given key have a circular dependency within.
 * @param o object
 * @param key key
 * @param visited additional objects to test against
 */
export const keyHasCircularDependency = <T extends object>(
  o: T,
  key: keyof T,
  visited = new Set()
): boolean => {
  if (!["object", "array"].includes(getType(o))) {
    return false;
  }

  if (visited.has(o[key])) {
    return true;
  }

  visited.add(o[key]);

  for (const k in o[key]) {
    if (keyHasCircularDependency(o[key] as Record<string, object>, k, visited)) {
      return true;
    }
  }

  visited.delete(o[key]);
  return false;
};

/**
 * detects if an object/array have a circular dependency within its structure.
 * @param o object
 */
export const hasCircularDependency = (o: object): boolean => {
  if (!["object", "array"].includes(getType(o))) {
    return false;
  }

  for (const key in o) {
    if (keyHasCircularDependency(o, key as keyof object, new Set([o]))) {
      return true;
    }
  }

  return false;
};
