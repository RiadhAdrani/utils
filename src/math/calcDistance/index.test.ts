import { it, expect, describe } from "vitest";
import { calcDistance, calcDistance3d } from ".";

describe("calcDistance", () => {
  it.each([
    [[0, 0, 0, 0], 0],
    [[1, 0, 0, 0], 1],
    [[1, 1, 0, 0], 1.41],
    [[1, 1, -1, -1], 2.82],
    [[-1, -1, 0, 1], 2.23],
  ])("should calculate distance 2d", (input, expected) => {
    const res =
      Math.trunc(calcDistance(...(input as [number, number, number, number])) * 100) / 100;

    expect(res).toBe(expected);
  });

  it.each([
    [[0, 0, 0, 0, 0, 0], 0],
    [[1, 0, 0, 0, 0, 0], 1],
    [[1, 1, 1, 0, 0, 0], 1.73],
    [[7, 4, 3, 17, 6, 2], 10.24],
    [[-9, 23.62, -3, 23, -8.33, 33], 57.79],
  ])("should calculate distance 2d", (input, expected) => {
    const res =
      Math.trunc(
        calcDistance3d(...(input as [number, number, number, number, number, number])) * 100
      ) / 100;

    expect(res).toBe(expected);
  });
});
