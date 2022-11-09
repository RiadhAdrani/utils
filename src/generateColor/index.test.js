const { generateContrastSafeColor } = require(".");

describe("generateColor", () => {
  it.each([
    ["#fff", "#000"],
    ["#000", "#fff"],
    ["#f00", "#fff"],
    ["#0f0", "#000"],
    ["#00f", "#fff"],
    ["#f0f", "#fff"],
    ["#0ff", "#000"],
    ["#4b4400", "#fff"],
    ["#b5b5b5", "#000"],
  ])("should generate safe color : %s", (input, expected) => {
    expect(generateContrastSafeColor(input)).toBe(expected);
  });
});
