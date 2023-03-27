import { it, expect, describe } from "vitest";
import capitalize from ".";

describe("capitalize", () => {
  it.each([[null], [undefined], [1], [" "], [["hello"]]])(
    "should capitalize text",
    (input: unknown) => {
      expect(() => capitalize(input as string)).toThrow();
    }
  );

  it.each([["string", "String"]])("should capitalize text", (input: unknown, expected: unknown) => {
    expect(capitalize(input as string)).toStrictEqual(expected);
  });
});
