export { default as areEqual } from "./areEqual/index.js";
export { default as hasProperty } from "./hasProperty/index.js";
export { default as isFalsy } from "./isFalsy/index.js";
export { default as isFunction } from "./isFunction/index.js";
export { default as isPrimitive } from "./isPrimitiveType/index.js";
export { default as merge } from "./merge/index.js";
export { default as verify } from "./verify/index.js";
export { default as copy } from "./copy/index.js";
export { default as forEachKey } from "./forEachKey/index.js";
export { default as pick } from "./pick/index.js";
export { default as omit } from "./omit/index.js";
export { default as copyKeys } from "./copyKeys/index.js";
export { default as findKey } from "./findKey/index.js";
export { default as getType } from "./getType/index.js";

export * from "./isTrue/index.js";
export * from "./getType/index.js";

export type ObjectOf<T> = Record<string, T>;
