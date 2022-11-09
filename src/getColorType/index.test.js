const { getColorType } = require(".");

describe("getColorType", () => {
  it.each([
    ["red", "unknown"],
    [123, "unknown"],
    ["rgb(1,2,3)", "rgb"],
    ["rgba(1,2,3,0.5)", "rgb"],
    ["hsl(1deg 2% 3%)", "hsl"],
    ["hsla(360deg 2% 3% / 0.5)", "hsl"],
    ["#000", "hex"],
    ["#111111", "hex"],
    ["#aaaaaaaa", "hex"],
  ])('should return the correct type "%s"', (color, expected) => {
    expect(getColorType(color)).toBe(expected);
  });
});
