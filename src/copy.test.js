const copy = require("./copy");

test.each([
    [null, null],
    [undefined, undefined],
    [1, 1],
    ["string", "string"],
    [["array"], ["array"]],
    [{ key: "object" }, { key: "object" }],
])("should copy test", (input, expected) => {
    expect(copy(input)).toStrictEqual(expected);
});
