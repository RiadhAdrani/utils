import { isObject } from "../isTrue";

export default function <T>(
  callback: (key: string, value: T, index: number) => void,
  object: Record<string, T>
) {
  if (!isObject(object)) {
    throw `Expected an object but found (${typeof object}).`;
  }

  Object.keys(object).forEach((key, index) => callback(key, object[key], index));
}
