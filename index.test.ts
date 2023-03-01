import * as All from ".";

import { it, expect, describe } from "@jest/globals";
import { isDefined } from ".";

describe("Index file", () => {
  it("should contain all array exports", () => {
    expect(isDefined(All.isArrayOf)).toBe(true);
    expect(isDefined(All.range)).toBe(true);
    expect(isDefined(All.segmentize)).toBe(true);
    expect(isDefined(All.shuffle)).toBe(true);
  });

  it("should contain all async exports", () => {
    expect(isDefined(All.runAfter)).toBe(true);
  });

  it("should contain all color exports", () => {
    expect(isDefined(All.hslToRgb)).toBe(true);
    expect(isDefined(All.rgbToHex)).toBe(true);
    expect(isDefined(All.rgbToHsl)).toBe(true);
    expect(isDefined(All.convertColor)).toBe(true);
    expect(isDefined(All.generateContrastSafeColor)).toBe(true);
    expect(isDefined(All.generateComplementaryColor)).toBe(true);
    expect(isDefined(All.generateColorTonalPalette)).toBe(true);
    expect(isDefined(All.changeColorOpacity)).toBe(true);
    expect(isDefined(All.getColorType)).toBe(true);
    expect(isDefined(All.getColorType)).toBe(true);
    expect(isDefined(All.isHexColor)).toBe(true);
    expect(isDefined(All.hsla)).toBe(true);
    expect(isDefined(All.isHslForm)).toBe(true);
    expect(isDefined(All.isHslaForm)).toBe(true);
    expect(isDefined(All.extractDataFromHSL)).toBe(true);
    expect(isDefined(All.extractDataFromRGB)).toBe(true);
    expect(isDefined(All.isHslColor)).toBe(true);
    expect(isDefined(All.rgba)).toBe(true);
    expect(isDefined(All.isRgbColor)).toBe(true);
    expect(isDefined(All.isRgbaForm)).toBe(true);
    expect(isDefined(All.isRgbColor)).toBe(true);
  });

  it("should contain all iteration exports", () => {
    expect(isDefined(All.forRange)).toBe(true);
  });

  it("should contain all math exports", () => {
    expect(isDefined(All.calcDistance)).toBe(true);
    expect(isDefined(All.calcDistance3d)).toBe(true);
    expect(isDefined(All.clamp)).toBe(true);
    expect(isDefined(All.isInInterval)).toBe(true);
    expect(isDefined(All.random)).toBe(true);
  });

  it("should contain all object exports", () => {
    expect(isDefined(All.areEqual)).toBe(true);
    expect(isDefined(All.copy)).toBe(true);
    expect(isDefined(All.hasProperty)).toBe(true);
    expect(isDefined(All.isFalsy)).toBe(true);
    expect(isDefined(All.isFunction)).toBe(true);
    expect(isDefined(All.isPrimitiveType)).toBe(true);
    expect(isDefined(All.isTrue)).toBe(true);
    expect(isDefined(All.isString)).toBe(true);
    expect(isDefined(All.isNull)).toBe(true);
    expect(isDefined(All.isArray)).toBe(true);
    expect(isDefined(All.isNull)).toBe(true);
    expect(isDefined(All.isObject)).toBe(true);
    expect(isDefined(All.isDefined)).toBe(true);
    expect(isDefined(All.merge)).toBe(true);
    expect(isDefined(All.verify)).toBe(true);
    expect(isDefined(All.forEachKey)).toBe(true);
    expect(isDefined(All.pick)).toBe(true);
  });

  it("should contain all string exports", () => {
    expect(isDefined(All.capitalize)).toBe(true);
    expect(isDefined(All.isBlank)).toBe(true);
    expect(isDefined(All.isEmpty)).toBe(true);
    expect(isDefined(All.wrap)).toBe(true);
    expect(isDefined(All.ellipsify)).toBe(true);
  });
});
