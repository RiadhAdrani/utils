# Async

[[toc]]

## runAfter()

create a promise that will resolve after the given amount of time in milliseconds.

Uses `setTimeout`.

```ts
function runAfter<T>(time: number, callback () => T): Promise<T | void>;
```

- _`time`_ : delay in milliseconds.
- _`callback`_ : callback to be executed.

> _throws when time is invalid._

> _throws when callback is not a function._
