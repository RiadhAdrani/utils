const isBlank = require("./isBlank");

test.each([
    [null, true],
    [undefined, true],
    [1, true],
    [{}, true],
    [[], true],
    ["", true],
    [" ", true],
    [" string", false],
    ["string ", false],
    [" string ", false],
    ["string", false],
    [" str in g ", false],
])("should copy test", (input, expected) => {
    expect(isBlank(input)).toStrictEqual(expected);
});
