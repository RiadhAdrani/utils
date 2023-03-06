import { it, expect, describe } from "@jest/globals";
import omit from ".";

describe("pick", () => {
  const obj = { name: "test", age: 99, job: "tester" };

  it("should create a new object all keys", () => {
    expect(omit(obj)).toStrictEqual({
      name: "test",
      age: 99,
      job: "tester",
    });
  });

  it("should preserve obj and create a new one with selected keys", () => {
    const omitted = omit(obj, "age");

    expect(omitted).toStrictEqual({ name: "test", job: "tester" });
    expect(obj).toStrictEqual({ name: "test", age: 99, job: "tester" });
  });
});
