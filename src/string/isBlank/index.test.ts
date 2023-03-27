import { it, expect, describe } from "vitest";
import isBlank from ".";

describe("isBlank", () => {
  it.each([
    [null, true],
    [undefined, true],
    [1, true],
    [{}, true],
    [[], true],
    ["", true],
    [" ", true],
    [" string", false],
    ["string ", false],
    [" string ", false],
    ["string", false],
    [" str in g ", false],
  ])("should copy test", (input, expected) => {
    expect(isBlank(input as string)).toStrictEqual(expected);
  });
});
