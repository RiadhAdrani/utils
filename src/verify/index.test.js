const verify = require(".");

describe("verify", () => {
    it("should run tests until false is returned", () => {
        const str = "myString";

        expect(
            verify(
                typeof str === "string",
                () => str.trim() !== "",
                str.trim().length > 3,
                () => str.trim().length < 10,
                !str.includes(" ")
            )
        ).toBe(true);
    });

    it("should exit chaining", () => {
        expect(
            verify(
                () => {},
                () => false,
                () => true
            )
        ).toBe(false);
    });
});
