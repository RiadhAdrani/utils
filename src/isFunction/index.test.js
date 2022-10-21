const isFunction = require(".");

test.each([
    [null, false],
    [undefined, false],
    [1, false],
    ["string", false],
    [{}, false],
    [[], false],
    [function () {}, true],
    [() => {}, true],
])("should determine if a value is a function '%s'", (input, expected) => {
    expect(isFunction(input)).toBe(expected);
});
