import wrap from ".";
import { it, expect, describe } from "@jest/globals";

describe("wrap", () => {
  it.each([
    [null, "", "", "null"],
    [undefined, "", "", "undefined"],
    [{}, "", "", "[object Object]"],
    [[], "", "", ""],
    ["", "", "", ""],
    ["string", "", "", "string"],
    ["string", " ", " ", " string "],
    ["string", "", " ", "string "],
    ["string", " ", ",", " string,"],
    ["string", "'", "'", "'string'"],
    ["string", '"', '"', '"string"'],
  ])("should copy test", (input, fw, lw, expected) => {
    expect(wrap(input as string, fw, lw)).toStrictEqual(expected);
  });
});
