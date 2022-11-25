import { it, expect, describe } from "@jest/globals";

import copy from ".";

describe("copy", () => {
  it.each([
    [null, null],
    [undefined, undefined],
    [1, 1],
    ["string", "string"],
    [["array"], ["array"]],
    [{ key: "object" }, { key: "object" }],
  ])("should copy test", (input, expected) => {
    expect(copy(input)).toStrictEqual(expected);
  });

  it("should not modify old reference", () => {
    const obj = { key: "123456789", uid: "sd-fsd6-f54" };
    const replica = copy(obj);

    replica.key = "key";

    expect(replica).toStrictEqual({ key: "key", uid: "sd-fsd6-f54" });
    expect(obj).toStrictEqual({ key: "123456789", uid: "sd-fsd6-f54" });
  });

  it("should not modify nested reference", () => {
    const obj = { key: "123456789", content: { index: 1 } };
    const replica = copy(obj);

    replica.content.index = "string" as unknown as number;

    expect(replica).toStrictEqual({ key: "123456789", content: { index: "string" } });
    expect(obj).toStrictEqual({ key: "123456789", content: { index: 1 } });
  });

  it("should copy functions", () => {
    const obj = { run: () => "done" };

    const obj2 = copy(obj);

    expect(obj2.run()).toBe(obj.run());
  });
});
