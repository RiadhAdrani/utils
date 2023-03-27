import { it, expect, describe } from "vitest";
import random from ".";
import isInInterval from "../isInInterval";

describe("random", () => {
  it("should throw when min is not a number", () => {
    expect(() => random("0" as unknown as number, 1)).toThrow();
  });

  it("should throw when max is not a number", () => {
    expect(() => random(1, "0" as unknown as number)).toThrow();
  });

  it("should throw when min is greater than max", () => {
    expect(() => random(5, 1)).toThrow();
  });

  it("should return a number between min and max", () => {
    const rnd = random(0, 5);

    expect(isInInterval(0, rnd, 5)).toBe(true);
  });
});
