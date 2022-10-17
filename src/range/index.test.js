const range = require(".");

test.each([
    [0, 0, []],
    [2, 0, [0, 1]],
    [10, 5, [5, 6, 7, 8, 9]],
])("should create the correct array of numbers : %s %s => %s", (end, start, expected) => {
    expect(range(end, start)).toStrictEqual(expected);
});

test("should throw an error", () => {
    const fn = () => range(5, 10);
    expect(fn).toThrow(Error);
});
