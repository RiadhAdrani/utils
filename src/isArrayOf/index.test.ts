import { it, expect, describe } from "@jest/globals";

import isArrayOf from ".";

describe("isArrayOf", () => {
  it("should throw an error when the source is not an array", () => {
    expect(() => isArrayOf("Hello" as unknown as Array<string>, "string")).toThrow();
  });

  it("should throw an error when the condition is not a string or a function", () => {
    expect(() => isArrayOf([], 1 as unknown as string)).toThrow();
  });

  it.each([
    [[], "string", true],
    [["hello"], "string", true],
    [[1, 2, 5], "number", true],
    [[1, 2, "", 5], "number", false],
    [[() => "", () => 2, () => 5], "function", true],
    [[() => "", [], () => 2, () => 5], "function", false],
  ])("should check each element of the array '%s<%s>' => '%s'", (object, condition, expected) => {
    expect(isArrayOf(object, condition)).toBe(expected);
  });
});
