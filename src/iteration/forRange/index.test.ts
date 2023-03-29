import { it, expect, describe } from "vitest";

import forRange from ".";

describe("forRange", () => {
  it.each([
    [() => 1, 0, 5, null],
    [() => 1, null, 5, 1],
    [() => 1, 0, null, 1],
    [null, 5, 0, 1],
  ])("should throw", (callback, end, start, step) => {
    expect(() =>
      forRange(callback as () => void, end as number, start as number, step as number)
    ).toThrow();
  });

  it.each([
    [() => 1, 5, 0, 1, 1],
    [
      (i: number) => {
        if (i > 2) return i;
      },
      5,
      0,
      1,
      3,
    ],
    [
      (i: number) => {
        if (i === 2) return i;
      },
      5,
      1,
      2,
      undefined,
    ],
  ])(
    "should return the correct value : '%s' '%s' '%s' '%s' ",
    (callback, start, end, step, expected) => {
      expect(
        forRange(callback as () => void, end as number, start as number, step as number)
      ).toStrictEqual(expected);
    }
  );
});
