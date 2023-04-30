import {
  isArray,
  isBigint,
  isBoolean,
  isNull,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
} from "../index.js";

export type Type =
  | "undefined"
  | "null"
  | "boolean"
  | "number"
  | "bigint"
  | "string"
  | "symbol"
  | "object"
  | "array";

/**
 * returns the type of the given object
 * @param o object
 */
const getType = (o: unknown): Type => {
  if (isNull(o)) return "null";

  if (isUndefined(o)) return "undefined";

  if (isNumber(o)) return "number";

  if (isBigint(o)) return "bigint";

  if (isString(o)) return "string";

  if (isBoolean(o)) return "boolean";

  if (isSymbol(o)) return "symbol";

  if (isArray(o)) return "array";

  return "object";
};

export default getType;
