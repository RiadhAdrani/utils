import { StringWithAutoComplete } from "../../index.js";

export default function omit<T extends object, K extends keyof T>(
  object: T,
  ...keys: Array<StringWithAutoComplete<keyof T | K>>
): Omit<T, K> {
  const out = { ...object } as T;

  Object.keys(out as Record<string, unknown>).forEach((key) => {
    if (keys.includes(key as K)) {
      delete out[key as keyof T];
    }
  });

  return out as Omit<T, K>;
}
