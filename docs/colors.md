# Colors

> individual package can be found here [`@riadh-adrani/color-utils`](https://github.com/RiadhAdrani/color-utils).

<br/>

> [[toc]]

## Types

#### `ColorTypes`

```ts
type ColorType = 'hex' | 'hsl' | 'rgb';
```

#### `Palette`

```ts
type Palette = {
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  99: string;
  100: string;
};
```

## getColorType()

resolve the correct type of the color.

```ts
function getColorType(color: string): ColorTypes | 'unknown';
```

- _`color`_ : target color.

## hsla()

create an hsla color form.

```ts
function hsla(h: number, s: number, l: number, a?: number): string;
```

- _`h`_ : hue.
- _`s`_ : saturation.
- _`l`_ : lightness.
- _`a`_ : alpha, by default set to `1`.

> _throws when `h` is not between `0..360`_

> _throws when `s` is not between `0..100`_

> _throws when `l` is not between `0..100`_

> _throws when `a` is not between `0..1`_

## rgba()

create an rgba color form.

```ts
function rgba(r: number, g: number, b: number, a?: number): string;
```

- _`r`_ : red.
- _`g`_ : green.
- _`b`_ : blue.
- _`a`_ : alpha, by default set to `1`.

> _throws when `r` is not between `0..255`_

> _throws when `g` is not between `0..255`_

> _throws when `b` is not between `0..255`_

> _throws when `a` is not between `0..1`_

## isRgbForm()

checks if the given color is of an `rgb` form.

note that red, green and blue values are not checked.

```ts
function isRgbForm(color: string): boolean;
```

- _`color`_ : target color.

## isRgbaForm()

checks if the given color is of an `rgba` form.

note that red, blue, green and alpha values are not checked.

```ts
function isRgbaForm(color: string): boolean;
```

- _`color`_ : target color.

## extractDataFromRGB()

extract data from an `rgb/a` color.

```ts
function extractDataFromRGB(color: string): number[];
```

- _`color`_ : target color.

> _throws if the type of the color is not `rgb/a`_

## isRgbColor()

checks if the given string is a `rgb/a` color.

```ts
function isRgbColor(color: string): boolean;
```

- _`color`_ : target color.

## isHexColor()

Checks if the given string is a hex color.

```ts
function isHexColor(color: string): boolean;
```

- _`color`_ : target color.

## isHslForm()

checks if the given color is of an `hsl` form.

note that hue, saturation, lightness values are not checked.

```ts
function isHslForm(color: string): boolean;
```

- _`color`_ : target color.

## isHslaForm()

checks if the given color is of an `hsla` form.

note that hue, saturation, lightness and alpha values are not checked.

```ts
function isHslaForm(color: string): boolean;
```

- _`color`_ : target color.

## extractDataFromHSL()

extract data from an `hsl/a` color.

```ts
function extractDataFromHSL(color: string): number[];
```

- _`color`_ : target color.

> _throws if the type of the color is not `hsl/a`_

## isHslColor()

checks if the given string is a `hsl/a` color.

```ts
function isHslColor(color: string): boolean;
```

- _`color`_ : target color.

## hslToRgb()

convert HSL color to RGB

```ts
function hslToRgb(h: number, s: number, l: number): [number, number, number];
```

- _`h`_ : hue.
- _`s`_ : saturation.
- _`l`_ : lightness.

## rgbToHsl()

convert RGB color to HSL

```ts
function rgbToHsl(r: number, g: number, b: number): [number, number, number];
```

- _`r`_ : red.
- _`g`_ : green.
- _`b`_ : blue.

## rgbToHex()

convert RGB color to HEX.

```ts
function rgbToHsl(r: number, g: number, b: number): string;
```

- _`r`_ : red.
- _`g`_ : green.
- _`b`_ : blue.

## convertColor()

convert a color to a given type.

if the `type` of the source color is not identifiable, the function will return it as it is.

```ts
function convertColor(color: string, to: ColorTypes): string;
```

- _`color`_ : color as string.
- _`to`_ : resulting color type.

## generateContrastSafeColor()

generates a contrasting color to the source.

```ts
function generateContrastSafeColor(color: string, light?: string, dark?: string): string;
```

- _`color`_ : color as string.
- _`light`_ : returned color if the given color is dark. `#fff` by default.
- _`dark`_ : returned color if the given color is dark. `#000` by default.

> _throws when color type is non-identifiable._

## generateComplementaryColor()

generates a contrasting color to the source.

```ts
function generateComplementaryColor(color: string, to?: ColorTypes): string;
```

- _`color`_ : color as string.
- _`to`_ : resulting color type.

> _throws when color type is non-identifiable._

## generateColorTonalPalette()

generates a tonal palette object according to the [material specification](https://m3.material.io/styles/color/the-color-system/key-colors-tones#6bdb9471-b70d-42c9-8ace-76743c1fff13).

```ts
function generateComplementaryColor(color: string, to?: ColorTypes): Palette;
```

- _`color`_ : color as string.
- _`to`_ : resulting colors type.

> _throws when color type is non-identifiable._

## changeColorOpacity()

create a new color with changed opacity.

```ts
function changeColorOpacity(color: string, opacity: number, to?: ColorTypes): string;
```

- _`color`_ : color as string.
- _`opacity`_ : opacity value between `0` and `1`.
- _`to`_ : resulting colors type. `hex` by default.

> _throws when color type is non-identifiable._

> _throws an error when opacity is not between `0` and `1`._
