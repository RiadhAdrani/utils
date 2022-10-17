const hasProperty = require(".");

test.each([
    [null, "prop", false],
    [undefined, "prop", false],
    [1, "prop", false],
    [true, "prop", false],
    ["string", "prop", false],
    [{ key: "prop" }, "prop", false],
    [{ prop: "val" }, "prop", true],
    [{ prop: null }, "prop", true],
])("should determine if '%s' has property '%s'", (object, prop, expected) => {
    expect(hasProperty(object, prop)).toBe(expected);
});
