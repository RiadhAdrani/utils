/**
 * wrap a string around two others.
 * @param value input.
 * @param start start wrapper.
 * @param end end wrapper. if no value is provided, the value of the wrapper will be used instead
 */
export default function wrap(value: string, start: string, end = start): string {
  return `${start}${value}${end}`;
}
