export { default as areEqual } from "./areEqual";
export { default as hasProperty } from "./hasProperty";
export { default as isFalsy } from "./isFalsy";
export { default as isFunction } from "./isFunction";
export { default as isPrimitiveType } from "./isPrimitiveType";
export { default as merge } from "./merge";
export { default as verify } from "./verify";
export { default as copy } from "./copy";
export { default as forEachKey } from "./forEachKey";
export { default as pick } from "./pick";
export { default as omit } from "./omit";

export * from "./isTrue";

export type ObjectOf<T> = Record<string, T>;
