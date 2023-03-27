import { it, expect, describe } from "vitest";
import isEmpty from ".";

describe("isEmpty", () => {
  it.each([
    [null, true],
    [undefined, true],
    [1, true],
    [{}, true],
    [[], true],
    ["", true],
    ["string", false],
  ])("should copy test", (input, expected) => {
    expect(isEmpty(input as string)).toStrictEqual(expected);
  });
});
