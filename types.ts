export type StringWithAutoComplete<T> = T | (string & Record<never, never>);

export type ObjectOf<T> = { [key: string]: T };

export type TypeOrArray<T> = T | Array<T>;
