import { it, expect, describe } from "@jest/globals";
import segmentize from ".";

describe("segmentize", () => {
  it.each([
    [[1, 2, 3], 1, [[1], [2], [3]]],
    [[1, 2, 3], 2, [[1, 2], [3]]],
    [
      [1, 2, 3, 4, 5, 6, 7, 8],
      2,
      [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ],
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8],
      3,
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8],
      ],
    ],
    [[1, 2, 3, 4, 5, 6, 7, 8], 10, [[1, 2, 3, 4, 5, 6, 7, 8]]],
    [[], 10, []],
  ])("should segmentize array", (array, length, result) => {
    expect(segmentize(array, length)).toStrictEqual(result);
  });
});
