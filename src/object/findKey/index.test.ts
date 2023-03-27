import { jest, describe, it, expect } from "vitest";
import findKey from ".";

describe("findKey", () => {
  const obj = { age: 10, name: "test", job: "tester", alt: "test" };

  it("should return undefined when no value key pairs are found", () => {
    expect(findKey((_, value) => value === "me", obj)).toBe(undefined);
  });

  it("should return key value pair", () => {
    expect(findKey((_, value) => value === "test", obj)).toStrictEqual({
      key: "name",
      value: "test",
    });
  });

  it("should return the first key satisfying the condition", () => {
    expect(findKey((_, value) => value === "test", obj)).toStrictEqual({
      key: "name",
      value: "test",
    });
  });
});
