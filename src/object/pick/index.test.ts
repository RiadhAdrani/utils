import { it, expect, describe, jest } from "vitest";
import pick from ".";

describe("pick", () => {
  const obj = { name: "test", age: 99, job: "tester" };

  it("should create a new object no keys", () => {
    expect(pick(obj)).toStrictEqual({});
  });

  it("should preserve obj and create a new one with selected keys", () => {
    const picked = pick(obj, "job");

    expect(picked).toStrictEqual({ job: "tester" });
    expect(obj).toStrictEqual({ name: "test", age: 99, job: "tester" });
  });
});
