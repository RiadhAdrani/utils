const { convertColor, hslToRgb, rgbToHex, rgbToHsl } = require(".");
const { RGB, HSL, HEX } = require("../getColorType");

it.each([
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [90, 50, 50],
    [128, 191, 64],
  ],
  [
    [180, 32, 95],
    [238, 246, 246],
  ],
  [
    [360, 100, 100],
    [255, 255, 255],
  ],
])("should convert HSL to RGB", (color, expected) => {
  expect(hslToRgb(...color)).toStrictEqual(expected);
});

it.each([
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [128, 191, 64],
    [90, 49.8, 50],
  ],
  [
    [238, 246, 246],
    [180, 30.77, 94.9],
  ],
  [
    [255, 255, 255],
    [0, 0, 100],
  ],
])("should convert RGB to HEX", (color, expected) => {
  expect(rgbToHsl(...color)).toStrictEqual(expected);
});

it.each([
  [[0, 0, 0], "#000000ff"],
  [[128, 191, 64], "#80bf40ff"],
  [[238, 246, 246], "#eef6f6ff"],
  [[255, 255, 255], "#ffffffff"],
])("should convert RGB to HEX", (color, expected) => {
  expect(rgbToHex(...color)).toStrictEqual(expected);
});

it.each([
  ["red"],
  ["123"],
  ["#12"],
  ["red-yellow"],
  ["#15689"],
  ["rgb(1,x,13)"],
  ["hsla(#ff,#aa)"],
])("should return the input if the color type is unknown", (color) => {
  expect(convertColor(color, "hex")).toBe(color);
});

it.each([["hexa"], ["rrggbb"], ["unknown"], ["cyq"]])(
  "should return the input if the target type is unknown",
  (type) => {
    expect(convertColor("red", type)).toBe("red");
  }
);

it.each([
  ["rgb(0,0,0)", "rgb"],
  ["rgba(0,0,0,1)", "rgb"],
  ["hsl(0deg 0% 0%)", "hsl"],
  ["hsla(0deg 0% 0% / 1)", "hsl"],
  ["#ccc", "hex"],
  ["#121212", "hex"],
  ["#12121299", "hex"],
])("should return the input if the target type is the same", (color, type) => {
  expect(convertColor(color, type)).toBe(color);
});

it.each([
  ["#000", "rgba(0,0,0,1)"],
  ["#abc", "rgba(170,187,204,1)"],
  ["#121212", "rgba(18,18,18,1)"],
  ["#ababab", "rgba(171,171,171,1)"],
  ["#ababab22", "rgba(171,171,171,0.13)"],
  ["#8f5aeecc", "rgba(143,90,238,0.8)"],
])("should convert hex to rgb : %s => %s", (color, expected) => {
  expect(convertColor(color, RGB)).toBe(expected);
});

it.each([
  ["#000", "hsla(0deg 0% 0% / 1)"],
  ["#abc", "hsla(210deg 25% 73.33% / 1)"],
  ["#ff0000", "hsla(0deg 100% 50% / 1)"],
  ["#ff0000ab", "hsla(0deg 100% 50% / 0.67)"],
  ["#ababab", "hsla(0deg 0% 67.06% / 1)"],
  ["#ababab22", "hsla(0deg 0% 67.06% / 0.13)"],
  ["#8f5aeecc", "hsla(261deg 81.32% 64.31% / 0.8)"],
])("should convert hex to hsl : %s => %s", (color, expected) => {
  expect(convertColor(color, HSL)).toBe(expected);
});

it.each([
  ["rgb(0,0,0)", "hsla(0deg 0% 0% / 1)"],
  ["rgb(50,120,70)", "hsla(137deg 41.18% 33.33% / 1)"],
  ["rgb(20,40,60)", "hsla(210deg 50% 15.69% / 1)"],
  ["rgb(255,255,255)", "hsla(0deg 0% 100% / 1)"],
])("should convert rgb to hsl : %s => %s", (color, expected) => {
  expect(convertColor(color, HSL)).toBe(expected);
});

it.each([
  ["rgba(0,0,0,1)", "#000000ff"],
  ["rgba(170,187,204,1)", "#aabbccff"],
  ["rgba(18,18,18,1)", "#121212ff"],
  ["rgba(171,171,171,1)", "#abababff"],
  ["rgba(171,171,171,0.13)", "#ababab21"],
  ["rgba(143,90,238,0.8)", "#8f5aeecc"],
])("should convert rgb to hex : %s => %s", (color, expected) => {
  expect(convertColor(color, HEX)).toBe(expected);
});

it.each([
  ["hsl(0deg 0% 0%)", "#000000ff"],
  ["hsl(210deg 25% 73%)", "#a9bacbff"],
  ["hsl(0deg 100% 50%)", "#ff0000ff"],
  ["hsla(0deg 100% 50% / 0.67)", "#ff0000ab"],
  ["hsla(0deg 0% 67% / 1)", "#abababff"],
  ["hsla(0deg 0% 67% / 0.13)", "#ababab21"],
  ["hsla(261deg 81% 64% / 0.8)", "#8d59eecc"],
])("should convert hsl to hex : %s => %s", (color, expected) => {
  expect(convertColor(color, HEX)).toBe(expected);
});

it.each([
  ["hsl(0deg 0% 0%)", "rgba(0,0,0,1)"],
  ["hsl(137deg 41% 33%)", "rgba(50,119,69,1)"],
  ["hsla(210deg 50% 15% / 0.5)", "rgba(19,38,57,0.5)"],
  ["hsla(0deg 0% 100% / 1)", "rgba(255,255,255,1)"],
  ["hsla(0deg 0% 100% / 0.33)", "rgba(255,255,255,0.33)"],
])("should convert hsl to rgb : %s => %s", (color, expected) => {
  expect(convertColor(color, RGB)).toBe(expected);
});
