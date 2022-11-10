/**
 * return if a value is falsy or not.
 * You can add your own values that will be tested too.
 *
 * initial falsy value are : `false`, `0`, `-0`, `0n`,  `""`, `null`, `undefined`, `Nan`.
 * @param value
 * @param additionalFalsyList
 */
export default function isFalsy<T>(value: T, additionalFalsyList?: Array<unknown>): boolean;
