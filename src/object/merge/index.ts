import { cast } from "../../index.js";
import getType from "../getType/index.js";
import hasProperty from "../hasProperty/index.js";
import { isArray, isObject } from "../index.js";

/**
 * deeply merge two or more objects.
 * @param objects to merge.
 */
export default function merge<S extends object, T extends object = S>(...objects: Array<S>): T {
  objects.forEach((o) => {
    if (!isObject(o)) {
      throw new Error(`All argument should be of type (object) but one is (${getType(o)})`);
    }
  });

  return objects.reduce((output, object) => {
    // we check if one/both object/s is/are array
    if (isArray(object)) {
      if (isArray(output)) {
        // we merge indexes
        const l1 = (output as Array<unknown>).length;
        const l2 = (object as Array<unknown>).length;

        for (let i = 0; i < Math.max(l1, l2); i++) {
          if (!hasProperty(output, i)) {
            (output as Array<unknown>)[i] = (object as Array<unknown>)[i];
          } else if (
            getType(cast<Record<string, string>>(output)[i]) !== "object" ||
            getType(cast<Record<string, string>>(object)[i]) !== "object"
          ) {
            (output as Array<unknown>)[i] = (object as Array<unknown>)[i];
          } else {
            cast<Record<string, unknown>>(output)[i] = merge(
              (output as Record<string, Record<string, unknown>>)[i],
              (object as Record<string, Record<string, unknown>>)[i]
            );
          }
        }
      } else {
        // we replace output
        return object as unknown as T;
      }
    } else {
      Object.keys(object).forEach((key) => {
        if (!hasProperty(output, key)) {
          cast<Record<string, unknown>>(output)[key] = cast<Record<string, unknown>>(object)[key];
        } else {
          if (
            getType(cast<Record<string, string>>(output)[key]) !== "object" ||
            getType(cast<Record<string, string>>(object)[key]) !== "object"
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
    }
    return output;
  }, {} as T) as T;
}
