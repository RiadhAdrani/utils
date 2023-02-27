import { it, expect, describe, jest } from "@jest/globals";
import forEachKey from ".";

describe("forEachKey", () => {
  it("should throw when object is invalid", () => {
    expect(() => forEachKey(() => 0, 1 as unknown as Record<string, string>)).toThrow();
  });

  it("should throw when callback is invalid", () => {
    expect(() => forEachKey(1 as unknown as () => void, {})).toThrow();
  });

  it("should run with correct values", () => {
    const callback = jest.fn();

    const object = { one: 1, two: 2, three: 3, four: 4 };

    forEachKey(callback, object);

    expect(callback).toHaveBeenCalledTimes(4);
  });
});
