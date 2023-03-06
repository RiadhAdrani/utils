# Arrays

[[toc]]

## Types

#### `Arrayable`

```ts
type Arrayable<T> = T | Array<T>;
```

## isArrayOf()

checks if each element of the array fullfil the provided condition.

```ts
function isArrayOf<T>(array: Array<T>, condition: string | ((item: T) => boolean)): boolean;
```

- _`array`_ : the array in question.
- _`condition`_ : a type as string (number, string, object ...) or a function, taking taking an element as the only argument and returning boolean.

> _throws when the condition is neither a string or a function returning a boolean._

## range()

creates an array of numbers in the given interval.

```ts
function range(end: number, start?: number): Array<number>;
```

- _`end`_ : ending number.
- _`start`_ : starting number, `0` by default

> _throws when one or both arguments are not of type `number`._

> _throws when `end` is inferior to `start`_

## segmentize()

divide an array into segments and return the result.

```ts
function segmentize<T>(array: T[], segmentLength: number): Array<T[]>;
```

- _`array`_ : source array.
- _`segmentLength`_ : maximum length of a segment.

## shuffle()

shuffle an array an return the result.

> _The resulting array is not guaranteed to be different from the original one._

```ts
function shuffle<T>(input: T[]): T[];
```

- _`input`_ : source array.
