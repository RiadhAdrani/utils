# Object

> individual package can be found here [`@riadh-adrani/obj-utils`](https://github.com/RiadhAdrani/obj-utils).

<br/>

[[toc]]

### `Types`

```ts
type Type =
  | 'undefined'
  | 'null'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'string'
  | 'symbol'
  | 'object'
  | 'array';
```

## areEqual()

perform deep comparison of two objects of any type.

```ts
function areEquals(obj1: unknown, obj2: unknown, depth?: number): boolean;
```

- _`obj1`_ : first object.
- _`obj2`_ : second object.
- _`depth`_ : maximum comparison depth. `10` by default.

## copy()

create a deep copy from the given object. Works only with plain JavaScript objects.

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

## isPrimitive()

checks if an object is of a primitive type.

JavaScript primitive types : `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` and `null.`

```ts
function isPrimitive<T>(object: T): boolean;
```

- _`object`_ : source object.

## merge()

perform deep merge of two `objects`.

```ts
function merge<T = Record<string, unknown>>(...objects: Record<string, unknown>[]): T;
```

- _`...objects`_ : objects to be merged.

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

## isUndefined()

checks if the object provided is equal to `undefined`.

```ts
function isUndefined(o: unknown): boolean;
```

- _`o`_ : any object.

## isBoolean()

checks if the object provided is of type `boolean`.

```ts
function isBoolean(o: unknown): boolean;
```

- _`o`_ : any object.

## isBigint()

checks if the object provided is of type `bigint`.

```ts
function isBigint(o: unknown): boolean;
```

- _`o`_ : any object.

## isSymbol()

checks if the object provided is of type `symbol`.

```ts
function isSymbol(o: unknown): boolean;
```

- _`o`_ : any object.

## getType()

returns the `type` of the object.

This fucntion differntiate between `object`, `array` and `null`.

> check [Type](#types) for the full list of values.

```ts
function getType(o: unknown): Type;
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

## keyHasCircularDependency()

detects if the given key have a circular dependency within.

```ts
function hasCircularDependency<T extends object>(o: T, key: keyof T, visited: Set<unkown>): boolean;
```

- _`o`_ : object
- _`key`_ : specific key to be tested
- _`visited`_ : a set of additional object that will be tested against each value within the specific key, empty by default.
