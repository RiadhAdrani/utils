import { it, expect, describe } from "@jest/globals";
import { isHslColor, isHslForm, isHslaForm, extractDataFromHSL } from ".";

describe("isHSLColor", () => {
  it.each([[1], [[]], [{}], [null], [undefined]])("should refuse non string values", (value) => {
    expect(isHslColor(value as string)).toBe(false);
  });

  it.each([
    ["", false],
    ["hsl(10deg 5% 10% 1)", false],
    ["hsl(10deg % 10% 1)", false],
    ["hsl(deg 5% 10% 1)", false],
    ["hsl(10deg 5% % 1)", false],
    ["hsl(3000deg 100% 100%)", false],
    ["hsl(300deg 1000% 100%)", false],
    ["hsl(300deg 100% 1000%)", false],
    ["hsl(10deg 5% 10%)", true],
    ["hsl(10.5deg 5.5% 10.5%)", true],
  ])("should detect if a string is a hsl form : %s", (color, expected) => {
    expect(isHslForm(color)).toBe(expected);
  });

  it.each([
    ["", false],
    ["hsl(10deg 5% 10% 1)", false],
    ["hsl(10deg % 10% 1)", false],
    ["hsl(deg 5% 10% 1)", false],
    ["hsl(10deg 5% % 1)", false],
    ["hsl(3000deg 100% 100%)", false],
    ["hsl(300deg 1000% 100%)", false],
    ["hsl(300deg 100% 1000%)", false],
    ["hsla(10deg 5% 10% / 1)", true],
    ["hsla(10.5deg 5.5% 10.5% / 0.5)", true],
  ])("should extract data from hsl/hsla : %s", (color, expected) => {
    expect(isHslaForm(color)).toBe(expected);
  });

  it.each([
    ["hsla(10deg 5% 10% / 1)", [10, 5, 10, 1]],
    ["hsl(10deg 2.55% 10%)", [10, 2.55, 10]],
  ])("should detect if a string is a hsla form : %s", (color, expected) => {
    expect(extractDataFromHSL(color)).toStrictEqual(expected);
  });

  it("should throw an error when the hsl form is not detected", () => {
    expect(() => extractDataFromHSL("hsl()")).toThrow();
  });

  it.each([
    ["hsl (255 255 255)"],
    ["hsla (255 255 255)"],

    ["hsl( 0 255 255)"],
    ["hsla( 0 255 255)"],

    ["hsl(-1 255 255)"],
    ["hsla(-1 255 255)"],

    ["hsl(361 0 0)"],
    ["hsla(361 0 0)"],

    ["hsl(255 101  255)"],
    ["hsla(255,101  255)"],

    ["hsl(255 -1 255)"],
    ["hsla(255 -1 255)"],

    ["hsl(255 257 255)"],
    ["hsla(255 257 255)"],

    ["hsl(255 255 255 )"],
    ["hsla(255 255 255 )"],

    ["hsl(255 255 -1)"],
    ["hsla(255 255 -1)"],

    ["hsl(255 255 257)"],
    ["hsla(255 255 257)"],

    ["hsla(255 255 257 1 )"],
    ["hsla(255 255 257 1.1)"],
    ["hsla(255 255 257 -0.1)"],
  ])("should refuse bad forms '%s'", (value) => {
    expect(isHslColor(value)).toBe(false);
  });

  it.each([
    ["hsl(10.5deg 10% 10%)"],
    ["hsl(10.235deg 10% 10%)"],
    ["hsl(100.89deg 10% 10%)"],
    ["hsl(360deg 10% 10%)"],

    ["hsla(100deg 100% 100%)"],

    ["hsla(360deg 75% 50%)"],
    ["hsla(256deg 75% 50%)"],
    ["hsla(256deg 30% 50%)"],
    ["hsla(360deg 100% 0%)"],

    ["hsla(0deg 10% 55% / 1)"],
    ["hsla(360deg 25% 25% / 0)"],
    ["hsla(360deg 25% 25% / 1)"],
    ["hsla(360deg 25% 25% / 0)"],
    ["hsla(360deg 25% 25% / 0.1)"],
    ["hsla(360deg 25% 25% / 0.105975)"],
    ["hsla(360deg 25% 25% / 0.254725)"],
  ])("should accept good forms '%s'", (value) => {
    expect(isHslColor(value)).toBe(true);
  });
});
