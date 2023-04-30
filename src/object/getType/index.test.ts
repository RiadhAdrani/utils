import { describe, expect, it } from "vitest";
import getType, { Type } from ".";

describe("getType", () => {
  it("should return null", () => {
    expect(getType(null)).toBe<Type>("null");
  });

  it("should return undefined", () => {
    expect(getType(undefined)).toBe<Type>("undefined");
  });

  it("should return number", () => {
    expect(getType(1)).toBe<Type>("number");
  });

  it("should return bigint", () => {
    expect(getType(BigInt(1))).toBe<Type>("bigint");
  });

  it("should return string", () => {
    expect(getType("str")).toBe<Type>("string");
  });

  it("should return boolean", () => {
    expect(getType(true)).toBe<Type>("boolean");
    expect(getType(false)).toBe<Type>("boolean");
  });

  it("should return symbol", () => {
    expect(getType(Symbol.for("test"))).toBe<Type>("symbol");
  });

  it("should return array", () => {
    expect(getType([])).toBe<Type>("array");
  });

  it("should return object", () => {
    expect(getType({})).toBe<Type>("object");
  });
});
