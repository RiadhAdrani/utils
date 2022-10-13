const capitalize = require("./capitalize");

test.each([
    [null, null],
    [undefined, undefined],
    [1, 1],
    ["string", "String"],
    [" string", " string"],
    [["array"], ["array"]],
    [{ key: "object" }, { key: "object" }],
])("should capitalize text", (input, expected) => {
    expect(capitalize(input)).toStrictEqual(expected);
});
