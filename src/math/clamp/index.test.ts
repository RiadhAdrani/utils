import { it, expect, describe } from "vitest";
import clamp from ".";

describe("capitalize", () => {
  it.each([
    [10, 2, 5],
    ["1", 2, 5],
    [1, "2", 5],
    [10, 2, "5"],
  ])("should throw", (min: unknown, n: unknown, max: unknown) => {
    expect(() => clamp(min as number, n as number, max as number)).toThrow();
  });

  it.each([
    [1, 2, 5, 2],
    [3, 2, 5, 3],
    [3, 10, 5, 5],
  ])(
    "should clamp given number '%s > %s < %s' => %s ",
    (min: number, n: number, max: number, expected: unknown) => {
      expect(clamp(min, n, max)).toStrictEqual(expected);
    }
  );
});
