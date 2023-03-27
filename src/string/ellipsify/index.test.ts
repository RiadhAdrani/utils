import { it, expect, describe } from "vitest";
import ellipsify from ".";

describe("ellipsify", () => {
  it("should not ellipsify when text length is less or equal max", () => {
    expect(ellipsify("text", 4)).toBe("text");
    expect(ellipsify("text", 5)).toBe("text");
  });

  it("should ellipsify when text length is greater than max", () => {
    expect(ellipsify("text", 3)).toBe("tex...");
  });
});
