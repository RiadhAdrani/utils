const isHexColor = require(".");

test.each([
    [1, false],
    ["", false],
    ["#", false],
    ["#1", false],
    ["#12", false],
    ["#1 2", false],
    ["#1g2", false],
    ["#abc", true],
    ["#132", true],
    ["#1a3", true],
    ["#1a32", false],
    ["#1a323", false],
    ["#1a323a", true],
    ["#1a323a3", false],
    ["#1a323acc", true],
])("should determine if '%s' is a hex color value, expected : '%s'", (input, expected) => {
    expect(isHexColor(input)).toBe(expected);
});
