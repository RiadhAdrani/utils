import { it, expect, describe } from "vitest";
import merge from ".";

describe("merge", () => {
  it.each([
    [[undefined]],
    [[null]],
    [[1]],
    [["string"]],
    [[{}, undefined]],
    [[{}, null]],
    [[{}, {}, "string"]],
    [[{}, {}, 1, {}]],
  ])("should throw an error when an argument is not an object", (objects) => {
    expect(() => merge(...(objects as Record<string, unknown>[]))).toThrow();
  });

  it.each([
    [[{}], {}],
    [[{}, {}], {}],
    [[{}, { color: "red" }], { color: "red" }],
    [[{ color: "red" }, {}], { color: "red" }],
    [[{}, { color: "red" }, {}], { color: "red" }],
    [[{ color: "red" }, { color: "blue" }], { color: "blue" }],
    [[{ color: "red" }, { color: "blue" }, { color: "yellow" }], { color: "yellow" }],
    [[{ color: "red", age: 10 }, { color: "blue" }], { color: "blue", age: 10 }],
    [[{ data: null }, { data: {} }], { data: {} }],
    [[{ data: {} }, { data: null }], { data: null }],
    [[{ data: undefined }, { data: {} }], { data: {} }],
    [[{ data: {} }, { data: undefined }], { data: undefined }],
    [[{ data: { age: 1 } }, { data: { age: 2 } }], { data: { age: 2 } }],
    [[{ data: {} }, { data: { age: 2 } }], { data: { age: 2 } }],
    [[{ data: { age: 1 } }, { data: {} }], { data: { age: 1 } }],
    [
      [{ data: { age: 1, others: undefined } }, { data: { others: {} } }],
      { data: { age: 1, others: {} } },
    ],
    [
      [{ data: { age: 1, others: {} } }, { data: { others: undefined } }],
      { data: { age: 1, others: undefined } },
    ],
  ])("should merge one or more objects", (objects, expected) => {
    expect(merge(...objects)).toStrictEqual(expected);
  });
});
