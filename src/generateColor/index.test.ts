import { it, expect, describe } from "@jest/globals";

import { generateComplementaryColor, generateContrastSafeColor } from ".";

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

  it.each([
    ["#000", "#000000ff"],
    ["#fff", "#ffffffff"],
    ["#20dfdf", "#df2020ff"],
    ["#dfbf20", "#2040dfff"],
    ["#df20df", "#20df20ff"],
    ["#df20df2e", "#20df202e"],
  ])("should generate complementary color", (source, expected) => {
    expect(generateComplementaryColor(source, "hex")).toBe(expected);
  });
});
