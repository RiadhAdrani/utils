const isInInterval = require(".");

describe("isInInterval", () => {
    it.each([
        ["1", 5, 6],
        [1, "5", 6],
        [1, 5, "6"],
        [5, 5, 4],
    ])('should refuse bad inputs and combinations : "%s" < "%s" < "%s"', (min, value, max) => {
        expect(() => isInInterval(min, value, max)).toThrow();
    });

    it.each([
        [5, 6, 5, false],
        [1, 6, 5, false],
        [1, 1.5, 5, true],
        [1, 0.5, 5, false],
    ])('should compute result : "%s" < "%s" < "%s" => "%s"', (min, value, max, expected) => {
        expect(isInInterval(min, value, max)).toBe(expected);
    });
});
