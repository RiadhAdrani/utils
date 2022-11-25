import { it, expect, describe } from "@jest/globals";
import range from ".";

describe("range", () => {
  it.each([
    [0, 0, []],
    [2, 0, [0, 1]],
    [10, 5, [5, 6, 7, 8, 9]],
  ])("should create the correct array of numbers : %s %s => %s", (end, start, expected) => {
    expect(range(end, start)).toStrictEqual(expected);
  });

  it("should throw an error", () => {
    const fn = () => range(5, 10);
    expect(fn).toThrow();
  });

  it("should throw an error when end is not a number", () => {
    const fn = () => range("d" as unknown as number, 10);
    expect(fn).toThrow();
  });

  it("should throw an error when start is not a number", () => {
    const fn = () => range(10, "d" as unknown as number);
    expect(fn).toThrow();
  });
});
