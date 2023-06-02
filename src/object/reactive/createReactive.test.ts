import { beforeEach, describe, expect, it, vitest } from "vitest";
import createReactive from "./createReactive";
import { ReactiveArray } from "../../array";

describe("createReactive", () => {
  let onChanged = vitest.fn();

  beforeEach(() => {
    onChanged = vitest.fn();
  });

  it("should create an object with same structure", () => {
    const out = createReactive({ hello: "world" }, onChanged);

    expect(out).toStrictEqual({ hello: "world" });
  });

  it("should create a reactive array", () => {
    const out = createReactive([1, 2, 3], onChanged);

    expect(out instanceof ReactiveArray).toBe(true);
  });

  it("should execute onValueChanged when a property changes", () => {
    const out = createReactive({ hello: "world" }, onChanged);

    out.hello = "test";

    expect(onChanged).toHaveBeenCalledOnce();
  });

  it("should execute onValueChanged when a nested property changes", () => {
    const out = createReactive({ props: { n: 1, s: "" } }, onChanged);

    out.props.n = 2;

    expect(onChanged).toHaveBeenCalledOnce();
  });

  it("should execute onValueChanged when an item is pushed into a nested array", () => {
    const out = createReactive({ numbers: [1, 2, 3] }, onChanged);

    out.numbers.push(4);

    expect(onChanged).toHaveBeenCalledOnce();
    expect((out.numbers as ReactiveArray<number>).items).toStrictEqual([1, 2, 3, 4]);
  });

  it("should transform the new value to reactive", () => {
    const out = createReactive({ props: { n: 1, s: { count: 0, name: "test" } } }, onChanged);

    out.props.s = { count: 1, name: "done" };
    out.props.s.count++;

    expect(onChanged).toHaveBeenCalledTimes(2);
  });
});
