import { it, expect, describe } from "vitest";
import { isTrue } from ".";

describe("isTrue", () => {
  it.each([["string"], [1], [() => 1]])("should throw with invalid condition (%s)", (condition) => {
    expect(() => isTrue(condition as unknown as boolean)).toThrow();
  });

  it.each([
    [typeof "str" === "string", true],
    [typeof 123 === "string", false],
    [() => true, true],
    [() => false, false],
  ])("should return computation result : (%s) => (%s)", (condition, expected) => {
    expect(isTrue(condition)).toBe(expected);
  });
});
