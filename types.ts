export type StringWithAutoComplete<T> = T | (string & Record<never, never>);

export type ObjectOf<T> = { [key: string]: T };

export type TypeOrArray<T> = T | Array<T>;

export type ColorTypes = "hex" | "hsl" | "rgb";

export type Palette = {
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  99: string;
  100: string;
};
