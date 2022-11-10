import { it, expect, describe } from "@jest/globals";

import forRange from ".";

describe("forRange", () => {
  it.each([
    [
      () => {
        ("");
      },
      5,
      0,
      null,
      undefined,
    ],
    [
      () => {
        ("");
      },
      5,
      null,
      1,
      undefined,
    ],
    [
      () => {
        ("");
      },
      null,
      0,
      1,
      undefined,
    ],
    [null, 5, 0, 1, undefined],
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
    (callback, end, start, step, expected) => {
      expect(
        forRange(callback as () => void, end as number, start as number, step as number)
      ).toStrictEqual(expected);
    }
  );
});
