# Object

[[toc]]

## Types

#### `Verifier`

```ts
type Verifier = boolean | (() => boolean | void);
```

## areEqual()

perform deep comparison of two objects of any type.

```ts
function areEquals<T, K>(obj1: T, obj2: K, depth?: number): boolean;
```

- _`obj1`_ : first object.
- _`obj2`_ : second object.
- _`depth`_ : maximum comparison depth. `10` by default.

## copy()

create a copy from the given object. Works only with plain JavaScript objects.

```ts
function copy<T>(source: T): T;
```

- _`source`_ : source object.

## hasProperty()

checks if the given object has the named property as a key.

```ts
function hasProperty<T>(object: T, property: string): T;
```

- _`object`_ : source object.
- _`property`_ : property name.

## isFalsy()

checks if a value is falsy or not.

JavaScript falsy value are : `false`, `0`, `-0`, `""`, `null`, `undefined`, `Nan`.

```ts
function isFalsy<T>(value: T, additionalFalsyList?: unknown[]): boolean;
```

- _`value`_ : source object.
- _`additionalFalsyList`_ : a list of additional value that should be considered falsy..

## isFalsy()

checks if an object is a function.

```ts
function isFunction(object: unknown): boolean;
```

- _`object`_ : source object.

## isPrimitiveType()

checks if an object is of a primitive type.

JavaScript primitive types : `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` and `null.`

```ts
function isPrimitiveType<T>(object: T): boolean;
```

- _`object`_ : source object.

## merge()

perform deep merge of two `objects`.

```ts
function merge<T = Record<string, unknown>>(...objects: Record<string, unknown>[]): T;
```

- _`...objects`_ : objects to be merged.

## verify()

evaluate the list of statements as long as they are not `false`, returning true at the end, or break when a condition fail.

a `verifier` could be a boolean or a function returning a boolean.

note that returning any other value than `false` will not cause the verification to exit.

```ts
function verify(...verifiers: Verifier[]): boolean;
```

- _`...verifiers`_ : statements/conditions.
