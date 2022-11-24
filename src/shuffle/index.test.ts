import shuffle from ".";
import { it, expect, describe } from "@jest/globals";

describe("shuffle", () => {
  it("should keep elements", () => {
    const initial = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const shuffled = shuffle(initial);

    expect(shuffled.length).toBe(9);

    initial.forEach((n) => {
      expect(shuffled.includes(n)).toBe(true);
    });
  });
});
