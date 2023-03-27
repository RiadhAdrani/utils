import { it, expect, describe } from "vitest";

import {
  changeColorOpacity,
  generateColorTonalPalette,
  generateComplementaryColor,
  generateContrastSafeColor,
} from ".";

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
  ])("should generate complementary color '%s' -> '%s'", (source, expected) => {
    expect(generateComplementaryColor(source, "hex")).toBe(expected);
  });

  it.each([
    [
      "#000",
      {
        0: "#000000ff",
        10: "#1a1a1aff",
        20: "#333333ff",
        30: "#4d4d4dff",
        40: "#666666ff",
        50: "#808080ff",
        60: "#999999ff",
        70: "#b3b3b3ff",
        80: "#ccccccff",
        90: "#e6e6e6ff",
        95: "#f2f2f2ff",
        99: "#fcfcfcff",
        100: "#ffffffff",
      },
    ],
    [
      "#fff",
      {
        0: "#000000ff",
        10: "#1a1a1aff",
        20: "#333333ff",
        30: "#4d4d4dff",
        40: "#666666ff",
        50: "#808080ff",
        60: "#999999ff",
        70: "#b3b3b3ff",
        80: "#ccccccff",
        90: "#e6e6e6ff",
        95: "#f2f2f2ff",
        99: "#fcfcfcff",
        100: "#ffffffff",
      },
    ],
    [
      "#d46c5e",
      {
        0: "#000000ff",
        10: "#280e0bff",
        20: "#501c16ff",
        30: "#792b20ff",
        40: "#a1392bff",
        50: "#c94736ff",
        60: "#d46c5eff",
        70: "#df9186ff",
        80: "#e9b5afff",
        90: "#f4dad7ff",
        95: "#faedebff",
        99: "#fefbfbff",
        100: "#ffffffff",
      },
    ],
  ])("should generate color palette '%s'", (source, expected) => {
    expect(generateColorTonalPalette(source, "hex")).toStrictEqual(expected);
  });

  it.each([
    ["#000", 0, "#00000000"],
    ["#fff", 0.5, "#ffffff80"],
    ["#1e1e1e55", 0.8, "#1e1e1ecc"],
  ])("should generate complementary color '%s' -> '%s'", (source, opacity, expected) => {
    expect(changeColorOpacity(source, opacity)).toBe(expected);
  });
});
