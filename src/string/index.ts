export { default as capitalize } from "./capitalize";
export { default as isBlank } from "./isBlank";
export { default as isEmpty } from "./isEmpty";
export { default as wrap } from "./wrap";
export { default as ellipsify } from "./ellipsify";

export type StringWithAutoComplete<T> = T | (string & Record<never, never>);
