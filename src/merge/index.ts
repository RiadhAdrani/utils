import hasProperty from "../hasProperty";

/**
 * deeply merge two or more objects.
 * @param objects to merge.
 */
export default function merge<T = Record<string, unknown>>(
  ...objects: Array<Record<string, unknown>>
): T {
  if (objects.some((o) => typeof o !== "object")) {
    throw new Error("Some/All arguments are not of type (object).");
  }

  return objects.reduce((output, object) => {
    Object.keys(object).forEach((key) => {
      if (!hasProperty(output, key)) {
        output[key] = object[key];
      } else {
        if (
          typeof object[key] !== "object" ||
          typeof output[key] !== "object" ||
          output[key] === null ||
          object[key] === null
        ) {
          output[key] = object[key];
        } else {
          output[key] = merge(
            (output as Record<string, Record<string, unknown>>)[key],
            (object as Record<string, Record<string, unknown>>)[key]
          );
        }
      }
    });

    return output;
  }, {}) as T;
}
