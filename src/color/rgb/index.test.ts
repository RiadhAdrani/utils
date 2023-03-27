import { it, expect, describe } from "vitest";
import { isRgbColor, isRgbForm, isRgbaForm, extractDataFromRGB } from ".";

describe("isRgbColor", () => {
  it.each([[1], [[]], [{}], [null], [undefined]])("should refuse non string values", (value) => {
    expect(isRgbColor(value as string)).toBe(false);
  });

  it.each([
    ["", false],
    ["rgb(10, 5, 10, 1)", false],
    ["rgb(10, , 10, 1)", false],
    ["rgb(, 5, 10, 1)", false],
    ["rgb(10, 5, , 1)", false],
    ["rgb(3000, 100,100)", false],
    ["rgb(300, 1000, 100,)", false],
    ["rgb(300, 100, 1000,)", false],
    ["rgb(10, 5, 10)", true],
    ["rgb(10.5, 5.5, 10.5)", true],
  ])("should detect rgb form : %s", (color, expected) => {
    expect(isRgbForm(color)).toBe(expected);
  });

  it.each([
    ["", false],
    ["rgba(10, , 10, 1)", false],
    ["rgba(, 5, 10, 1)", false],
    ["rgba(10, 5, , 1)", false],
    ["rgba(3000, 100, 100%)", false],
    ["rgba(300, 1000, 100%)", false],
    ["rgba(300, 100, 1000%)", false],
    ["rgba(10, 5, 10, 0.26)", true],
    ["rgba(10.5, 5.5, 10.5, 1)", true],
  ])("should detect rgba form : %s", (color, expected) => {
    expect(isRgbaForm(color)).toBe(expected);
  });

  it.each([
    ["rgba(10, 5, 10, 0.5)", [10, 5, 10, 0.5]],
    ["rgb(10, 2.55, 10)", [10, 2.55, 10]],
  ])("should extract rgb data : %s", (color, expected) => {
    expect(extractDataFromRGB(color)).toStrictEqual(expected);
  });

  it("should throw an error when the rgb form is not detected", () => {
    expect(() => extractDataFromRGB("rgb()")).toThrow();
  });

  it.each([
    ["rgb (255,255,255)"],
    ["rgba (255,255,255)"],

    ["rgb( 0,255,255)"],
    ["rgba( 0,255,255)"],

    ["rgb(-1,255,255)"],
    ["rgba(-1,255,255)"],

    ["rgb(257,255,255)"],
    ["rgba(257,255,255)"],

    ["rgb(255,255 ,255)"],
    ["rgba(255,255 ,255)"],

    ["rgb(255,-1,255)"],
    ["rgba(255,-1,255)"],

    ["rgb(255,257,255)"],
    ["rgba(255,257,255)"],

    ["rgb(255,255,255 )"],
    ["rgba(255,255,255 )"],

    ["rgb(255,255,-1)"],
    ["rgba(255,255,-1)"],

    ["rgb(255,255,257)"],
    ["rgba(255,255,257)"],

    ["rgba(255,255,257,1 )"],
    ["rgba(255,255,257,1.1)"],
    ["rgba(255,255,257,-0.1)"],
  ])("should refuse bad forms '%s'", (value) => {
    expect(isRgbColor(value)).toBe(false);
  });

  it.each([
    ["rgb(0,0,0)"],
    ["rgb(0, 0,0)"],
    ["rgb(0, 0, 0)"],
    ["rgb(0,0, 0)"],

    ["rgb(1,1,1)"],
    ["rgb(1, 1,1)"],
    ["rgb(1, 1, 1)"],
    ["rgb(1,1, 1)"],

    ["rgb(10,10,10)"],
    ["rgb(10, 10,10)"],
    ["rgb(10, 10, 10)"],
    ["rgb(10,10, 10)"],

    ["rgb(100,100,100)"],
    ["rgb(100, 100,100)"],
    ["rgb(100, 100, 100)"],
    ["rgb(100,100, 100)"],

    ["rgb(256,256,256)"],
    ["rgb(256, 256,256)"],
    ["rgb(256, 256, 256)"],
    ["rgb(256,256, 256)"],

    ["rgba(0,0,0)"],
    ["rgba(0, 0,0)"],
    ["rgba(0, 0, 0)"],
    ["rgba(0,0, 0)"],

    ["rgba(1,1,1)"],
    ["rgba(1, 1,1)"],
    ["rgba(1, 1, 1)"],
    ["rgba(1,1, 1)"],

    ["rgba(10,10,10)"],
    ["rgba(10, 10,10)"],
    ["rgba(10, 10, 10)"],
    ["rgba(10,10, 10)"],

    ["rgba(100,100,100)"],
    ["rgba(100, 100,100)"],
    ["rgba(100, 100, 100)"],
    ["rgba(100,100, 100)"],

    ["rgba(256,256,256)"],
    ["rgba(256, 256,256)"],
    ["rgba(256, 256, 256)"],
    ["rgba(256,256, 256)"],

    ["rgba(256,256,256,1)"],
    ["rgba(256,256,256,0)"],
    ["rgba(256,256,256, 1)"],
    ["rgba(256,256,256, 0)"],
    ["rgba(256,256,256,0.1)"],
    ["rgba(256,256,256,0.105975)"],
    ["rgba(256,256,256, 0.254725)"],
  ])("should accept good forms '%s'", (value) => {
    expect(isRgbColor(value)).toBe(true);
  });
});
