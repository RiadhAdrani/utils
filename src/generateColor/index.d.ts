/**
 * generate a safe color that could be paired with the given one,
 * as a text or background color.
 *
 * @param color source
 * @param light color for dark colors
 * @param dark color for light colors
 */
export function generateContrastSafeColor(color: string, light?: string, dark?: string): string;
