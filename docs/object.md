# Object

[[toc]]

## Types

#### `Verifier`

```ts
type Verifier = boolean | (() => boolean | void);
```

#### `Condition`

```ts
type Condition = boolean | (() => boolean);
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
function hasProperty<T>(object: T, property: string): boolean;
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

## isFunction()

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

## isTrue()

checks if the condition provided is true.

```ts
function isTrue(condition: Condition): boolean;
```

- _`condition`_ : testable condition.

> throws when the condition is neither a `boolean` or a `function`.
> throws when the return type of the condition is not `boolean`.

## isNumber()

checks if the object provided is a number.

```ts
function isNumber(o: unknown): boolean;
```

- _`o`_ : any object.

## isString()

checks if the object provided is a string.

```ts
function isString(o: unknown): boolean;
```

- _`o`_ : any object.

## isArray()

checks if the object provided is an array.

```ts
function isArray(o: unknown): boolean;
```

- _`o`_ : any object.

## isObject()

checks if the object provided is an object.

```ts
function isObject(o: unknown): boolean;
```

- _`o`_ : any object.

## isNull()

checks if the object provided is null.

```ts
function isNull(o: unknown): boolean;
```

- _`o`_ : any object.

## isDefined()

checks if the object provided is different than `undefined`.

```ts
function isDefined(o: unknown): boolean;
```

- _`o`_ : any object.

## forEachKey()

run a callback for each key in a `Record`.

```ts
function <T>(callback: (key: string, value: T, index: number) => void, object: Record<string, T>)
```

- _`callback`_ : callback to be executed.
- _`object`_ : source object.

> _throws when object is not an object._

## pick()

creates a new object with only the given keys.

```ts
function pick<T extends Object, K extends keyof T>(object: T, ...keys: Array<K>): Pick<T, K>;
```

- _`object`_ : source object.
- _`...keys`_ : object's key to preserve.

## omit()

creates a new object omitting the given keys.

```ts
function omit<T extends Object, K extends keyof T>(object: T, ...keys: Array<K>): Omit<T, K>;
```

- _`object`_ : source object.
- _`...keys`_ : object's key to omit
