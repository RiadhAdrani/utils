import { it, expect, describe } from "@jest/globals";
import runAfter from ".";

describe("runAfter", () => {
  it.each([["str"], [-1]])("should throw when time is invalid", async (time) => {
    try {
      await runAfter(time as unknown as number, () => 1);
    } catch (e) {
      expect(e).toMatch("(time) is not valid.");
    }
  });

  it.each([["str"], [-1]])("should throw when time is invalid", async (cb) => {
    try {
      await runAfter(10, cb as unknown as () => void);
    } catch (e) {
      expect(e).toMatch("(callback) is not a function.");
    }
  });

  it.each([1, "str", { hello: 1 }, [], null, undefined])(
    "should return the result of the callback",
    async (value) => {
      const res = await runAfter(10, () => value);

      expect(res).toStrictEqual(value);
    }
  );
});
