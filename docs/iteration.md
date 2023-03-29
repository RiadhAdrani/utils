# Iteration

[[toc]]

## forRange()

execute a callback for each index of the range specified.

returning a `non-undefined` value will cause the loop to break.

```ts
function forRange<T = unknown>(
  callback: (index: number) => void | T,
  start: number,
  end: number,
  step?: number
): T | undefined;
```

- _`callback`_ : callback to be executed.
- _`start`_ : starting number, `0` by default.
- _`end`_ : ending number, non-inclusive.
- _`step`_ : stepping number, `1` by default.

> _throws when callback is not a function._

> _throws when end or start or end argument is not a number._
