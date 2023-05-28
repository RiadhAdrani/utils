import { describe, it, expect, beforeEach, vitest } from "vitest";
import ReactiveArray from "./ReactiveArray.js";

describe("ReactiveArray", () => {
  let handler = vitest.fn(() => {});
  let array = new ReactiveArray([1, 2, 3], handler);

  beforeEach(() => {
    handler = vitest.fn();
    array = new ReactiveArray([1, 2, 3], handler);
  });

  it("should create a reactive array", () => {
    expect(array.items).toStrictEqual([1, 2, 3]);
  });

  it("should push items w/ handler", () => {
    array.push(4);

    expect(array.items).toStrictEqual([1, 2, 3, 4]);
    expect(handler).toHaveBeenCalledOnce();
  });

  it("should not run handler when items pushed are empty", () => {
    array.push();

    expect(handler).toHaveBeenCalledTimes(0);
  });

  it("should pop items w/ handler", () => {
    array.pop();

    expect(array.items).toStrictEqual([1, 2]);
    expect(handler).toHaveBeenCalledOnce();
  });

  it("should not run handler when no item is popped", () => {
    array = new ReactiveArray([], handler);
    array.pop();

    expect(handler).toHaveBeenCalledTimes(0);
  });

  it("should shift items w/ handler", () => {
    array.shift();

    expect(array.items).toStrictEqual([2, 3]);
    expect(handler).toHaveBeenCalledOnce();
  });

  it("should not run handler when no item is shifted", () => {
    array = new ReactiveArray([], handler);
    array.shift();

    expect(handler).toHaveBeenCalledTimes(0);
  });

  it("should unshift items w/ handler", () => {
    array.unshift(-1, 0);

    expect(array.items).toStrictEqual([-1, 0, 1, 2, 3]);
    expect(handler).toHaveBeenCalledOnce();
  });

  it("should not run handler when no item is unshifted", () => {
    array.unshift();

    expect(handler).toHaveBeenCalledTimes(0);
  });

  it("should sort items w/ handler", () => {
    array.sort((a, b) => b - a);

    expect(array.items).toStrictEqual([3, 2, 1]);
    expect(handler).toHaveBeenCalledOnce();
  });

  it("should not run handler when no item is sorted", () => {
    array.sort((a, b) => a - b);

    expect(handler).toHaveBeenCalledTimes(0);
  });

  it("should fill items w/ handler", () => {
    array.fill(0);

    expect(array.items).toStrictEqual([0, 0, 0]);
    expect(handler).toHaveBeenCalledOnce();
  });

  it("should not run handler when no item changed with fill", () => {
    array = new ReactiveArray([0, 0, 0], handler);
    array.fill(0);

    expect(handler).toHaveBeenCalledTimes(0);
  });

  it("should copyWithin items w/ handler", () => {
    array.copyWithin(2, 1, 2);

    expect(array.items).toStrictEqual([1, 2, 2]);
    expect(handler).toHaveBeenCalledOnce();
  });

  it("should not run handler when no item changed with copyWithin", () => {
    array.copyWithin(0, 0);

    expect(handler).toHaveBeenCalledTimes(0);
  });

  // TODO
  it.skip("should splice items w/ handler", () => {
    array.splice(1);

    expect(array.items).toStrictEqual([1, 2, 3]);
    expect(handler).toHaveBeenCalledOnce();
  });
});
