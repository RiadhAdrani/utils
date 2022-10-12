const isEmpty = require("./isEmpty");

test.each([
    [null, true],
    [undefined, true],
    [1, true],
    [{}, true],
    [[], true],
    ["", true],
    ["string", false],
])("should copy test", (input, expected) => {
    expect(isEmpty(input)).toStrictEqual(expected);
});
