# String

[[toc]]

## capitalize()

capitalize the given string.

```ts
function capitalize(str: string): string;
```

- _`str`_ : string.

> throws when `str` is not a function.

## isEmpty()

checks if a string have no characters.

```ts
function isEmpty(value: string): boolean;
```

- _`value`_ : string.

## isBlank()

checks if a string is blank or not.

a blank string is the one having no characters after being trimmed.

```ts
function isBlank(value: string): boolean;
```

- _`value`_ : string.

## wrap()

wrap a string.

```ts
function wrap(value: string, wrapper: string, wrapperEnd?: string): string;
```

- _`value`_ : string.
- _`wrapper`_ : wrapper.
- _`wrapperEnd`_ : the end wrapper. by default it takes the value of the wrapper.
