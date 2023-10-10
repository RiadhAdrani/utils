# Async

> individual package can be found here [`@riadh-adrani/async-utils`](https://github.com/RiadhAdrani/async-utils).

<br/>

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

## wait()

execute an asynchronous timeout.

Uses `setTimeout`.

```ts
function wait<T>(time: number): Promise<void>;
```

- _`time`_ : delay in milliseconds.
