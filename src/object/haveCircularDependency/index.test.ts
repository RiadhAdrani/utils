import { describe, expect, it } from "vitest";
import { keyHasCircularDependency, hasCircularDependency } from "./index.js";

describe("hasCircularDependency", () => {
  // empty
  it("should return false with empty object/array", () => {
    expect(keyHasCircularDependency({}, "key" as keyof object)).toBe(false);
    expect(hasCircularDependency({})).toBe(false);
  });

  // null
  it.each([null, "str", 1, undefined, true])("should return false with empty object", (o) => {
    expect(keyHasCircularDependency(o as unknown as object, "key" as keyof object)).toBe(false);
    expect(hasCircularDependency(o as unknown as object)).toBe(false);
  });

  // simple circular dep
  it("should detect the circular dependency", () => {
    const o: Record<string, unknown> = { a: 1, b: 2, c: 3 };

    o.d = o;

    expect(keyHasCircularDependency(o, "d")).toBe(true);
    expect(hasCircularDependency(o)).toBe(true);
  });

  // should work with arrays too
  it("should detect array circular deps", () => {
    const o: Array<unknown> = [0, 1, 2, 3];

    o.push(o);

    expect(keyHasCircularDependency(o, 4)).toBe(true);
    expect(hasCircularDependency(o)).toBe(true);
  });

  // nested circular dep
  it("should detect the nested circular dependency", () => {
    const o: Record<string, unknown> = { a: 1, b: 2, c: 3, d: {} };

    (o.d as Record<string, unknown>).a = o;

    expect(keyHasCircularDependency(o, "d")).toBe(true);
    expect(hasCircularDependency(o)).toBe(true);
  });

  // deeply nested
  it("should detect the deeply nested circular dependency", () => {
    const o: Record<string, unknown> = { a: 1, b: 2, c: 3, d: {} };

    (o.d as Record<string, unknown>).a = {
      a: 1,
      b: 2,
      o: { c: 3, x: 2, o },
    };

    expect(keyHasCircularDependency(o, "d")).toBe(true);
    expect(hasCircularDependency(o)).toBe(true);
  });

  // multiple circular deps
  it("should detect with multiple circular dependency", () => {
    const o: Record<string, unknown> = { a: 1, b: 2, c: 3, d: {} };

    (o.d as Record<string, unknown>).a = {
      a: 1,
      b: o,
      c: 3,
      o,
    };

    expect(keyHasCircularDependency(o, "d")).toBe(true);
    expect(hasCircularDependency(o)).toBe(true);
  });

  // no circular deps
  it("should return false", () => {
    const o: Record<string, unknown> = { a: 1, b: 2, c: 3 };

    expect(keyHasCircularDependency(o, "d")).toBe(false);
    expect(hasCircularDependency(o)).toBe(false);
  });
});
