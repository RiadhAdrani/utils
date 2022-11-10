import { it, expect, describe } from "@jest/globals";
import isFalsy from ".";

describe("isFalsy", () => {
  it.each([
    [null, [], true],
    [undefined, [], true],
    [1, [], false],
    ["", [], true],
    ["string", [], false],
    ["string", ["string"], true],
  ])("should determine if a value is falsy '%s'", (input, more, expected) => {
    expect(isFalsy(input, more)).toBe(expected);
  });
});
