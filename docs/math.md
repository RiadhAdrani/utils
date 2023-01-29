# Math

[[toc]]

## isInInterval()

checks if the given value is within the [`min`...`max`] interval.

```ts
function isInInterval(min: number, value: number, max: number): boolean;
```

- _`min`_ : minimum value.
- _`max`_ : maximum value.
- _`value`_ : tested value.

> _throws when one/more argument/s is/are not of type number._

> _throws when `min` is superior to max._

## clamp()

clamp a number between two values.

```ts
function clamp(min: number, n: number, max: number): number;
```

- _`min`_ : minimum value.
- _`max`_ : maximum value.
- _`value`_ : number to be clamped.

> _throws when one/more argument/s is/are not of type number._

> _throws when `min` is superior to max._

## calcDistance()

calculate a distance between two points in a 2D space.

```ts
function calcDistance(x1: number, y1: number, x2: number, y2: number): number;
```

- _`x1`_ : first point x coordinate.
- _`y1`_ : first point y coordinate.
- _`x2`_ : second point x coordinate.
- _`y2`_ : second point y coordinate.

> _throws when one/more argument/s is/are not of type number._

## calcDistance3d()

calculate a distance between two points in a 3D space.

```ts
function calcDistance(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): number;
```

- _`x1`_ : first point x coordinate.
- _`y1`_ : first point y coordinate.
- _`z1`_ : first point z coordinate.
- _`x2`_ : second point x coordinate.
- _`y2`_ : second point y coordinate.
- _`z2`_ : second point z coordinate.

> _throws when one/more argument/s is/are not of type number._

## random()

generate a random number in a given interval.

```ts
function random(min: number, max: number, float?: boolean): number;
```

- _`min`_ : minimum value.
- _`max`_ : maximum value, exclusive.
- _`float`_ : allow float values. `false` by default.

> _throws when one/more argument/s is/are not of type number._ > _throws when `min` is greater than `max`._
