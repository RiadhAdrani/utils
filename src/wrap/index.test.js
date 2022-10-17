const wrap = require(".");

test.each([
    [null, "", "", "null"],
    [undefined, "", "", "undefined"],
    [{}, "", "", "[object Object]"],
    [[], "", "", ""],
    ["", "", "", ""],
    ["string", "", "", "string"],
    ["string", " ", " ", " string "],
    ["string", "", " ", "string "],
    ["string", " ", ",", " string,"],
    ["string", "'", "'", "'string'"],
    ["string", '"', '"', '"string"'],
])("should copy test", (input, fw, lw, expected) => {
    expect(wrap(input, fw, lw)).toStrictEqual(expected);
});
