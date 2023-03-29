import { cast } from "../../index.js";
import hasProperty from "../hasProperty/index.js";
import { isNull, isObject } from "../index.js";

/**
 * deeply merge two or more objects.
 * @param objects to merge.
 */
export default function merge<S extends object, T extends object>(...objects: Array<S>): T {
  if (objects.some((o) => !isObject(o))) {
    throw new Error("Some/All arguments are not of type (object).");
  }

  return objects.reduce((output, object) => {
    Object.keys(object).forEach((key) => {
      if (!hasProperty(output, key)) {
        cast<Record<string, unknown>>(output)[key] = cast<Record<string, unknown>>(object)[key];
      } else {
        if (
          !isObject(cast<Record<string, string>>(object)[key]) ||
          !isObject(cast<Record<string, string>>(output)[key]) ||
          isNull(cast<Record<string, string>>(object)[key]) ||
          isNull(cast<Record<string, string>>(output)[key])
        ) {
          cast<Record<string, unknown>>(output)[key] = cast<Record<string, unknown>>(object)[key];
        } else {
          cast<Record<string, unknown>>(output)[key] = merge(
            (output as Record<string, Record<string, unknown>>)[key],
            (object as Record<string, Record<string, unknown>>)[key]
          );
        }
      }
    });

    return output;
  }, {} as T) as T;
}
