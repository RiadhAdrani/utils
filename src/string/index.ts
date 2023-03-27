export { default as capitalize } from "./capitalize/index.js";
export { default as isBlank } from "./isBlank/index.js";
export { default as isEmpty } from "./isEmpty/index.js";
export { default as wrap } from "./wrap/index.js";
export { default as ellipsify } from "./ellipsify/index.js";

export type StringWithAutoComplete<T> = T | (string & Record<never, never>);
