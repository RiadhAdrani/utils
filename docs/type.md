# Type

> individual package can be found here [`@riadh-adrani/type-utils`](https://github.com/RiadhAdrani/type-utils).

<br/>

[[toc]]

## cast()

force cast an object to the given generic type `T`.

```ts
function cast<T = unknown>(obj: unknown): T;
```

- _`obj`_ : source.

## Callback

```ts
type Callback<Return = void, Args extends Array<unknown> = Array<unknown>> = (
  ...args: Args
) => Return;
```

## Arrayable

```ts
type Arrayable<T> = T | Array<T>;
```

## ArrayType

```ts
type ArrayType<T extends readonly unknown[]> = T extends readonly (infer ElementType)[]
  ? ElementType
  : never;
```

## StringWithAutoComplete

```ts
type StringWithAutoComplete<T> = T | (string & Record<never, never>);
```
