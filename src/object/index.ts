export { default as areEqual } from "./areEqual";
export { default as hasProperty } from "./hasProperty";
export { default as isFalsy } from "./isFalsy";
export { default as isFunction } from "./isFunction";
export { default as isPrimitiveType } from "./isPrimitiveType";
export { default as merge } from "./merge";
export { default as verify } from "./verify";
export { default as copy } from "./copy";
export * from "./isTrue";

export type ObjectOf<T> = { [key: string]: T };
