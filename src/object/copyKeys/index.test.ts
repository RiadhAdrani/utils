import { it, expect, describe } from "vitest";
import copyKeys from ".";

describe("copyKeys", () => {
  it("should copy keys into target", () => {
    const target = {};
    const source = { text: "test" };

    copyKeys(source, target);

    expect(target).toStrictEqual({ text: "test" });
  });

  it("should override keys", () => {
    const target = { text: "old" };
    const source = { text: "test" };

    copyKeys(source, target);

    expect(target).toStrictEqual({ text: "test" });
  });

  it("should copy all keys expect excluded", () => {
    const target = {};
    const source = { text: "test", age: 1 };

    copyKeys(source, target, "age");

    expect(target).toStrictEqual({ text: "test" });
  });
});
