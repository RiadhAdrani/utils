import { it, expect, describe } from "@jest/globals";
import isPrimitiveType from ".";

describe("isPrimitiveType", () => {
  it.each([
    [undefined, true],
    [1, true],
    ["string", true],
    [true, true],
    [false, true],
    [[], false],
    [{}, false],
    [null, false],
  ])("should determine if object type is primitive => '%s'", (input, expected) => {
    expect(isPrimitiveType(input)).toBe(expected);
  });
});
