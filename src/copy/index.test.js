const copy = require(".");

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

test("should not modify old reference", () => {
    const obj = { key: "123456789", uid: "sd-fsd6-f54" };
    const replica = copy(obj);

    replica.key = "key";

    expect(replica).toStrictEqual({ key: "key", uid: "sd-fsd6-f54" });
    expect(obj).toStrictEqual({ key: "123456789", uid: "sd-fsd6-f54" });
});

test("should not modify nested reference", () => {
    const obj = { key: "123456789", content: { index: 1 } };
    const replica = copy(obj);

    replica.content.index = "string";

    expect(replica).toStrictEqual({ key: "123456789", content: { index: "string" } });
    expect(obj).toStrictEqual({ key: "123456789", content: { index: 1 } });
});
