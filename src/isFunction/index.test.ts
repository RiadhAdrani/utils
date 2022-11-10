import { it, expect, describe } from "@jest/globals";
import isFunction from ".";

describe("isFunction", () => {
  it.each([
    [null, false],
    [undefined, false],
    [1, false],
    ["string", false],
    [{}, false],
    [[], false],
    [
      function () {
        1;
      },
      true,
    ],
    [
      () => {
        1;
      },
      true,
    ],
  ])("should determine if a value is a function '%s'", (input, expected) => {
    expect(isFunction(input)).toBe(expected);
  });
});
