/**
 * return if a value is falsy or not.
 * You can add your own values that will be tested too.
 *
 * initial falsy value are : `false`, `0`, `-0`, `0n`,  `""`, `null`, `undefined`, `Nan`.
 * @param {any} value
 * @param {Array<any>} additionalFalsyList
 */
function isFalsy(value, additionalFalsyList) {
    const list = Array.isArray(additionalFalsyList) ? additionalFalsyList : [];

    list.push(false, 0, -0, 0n, "", null, undefined, NaN);

    return list.includes(value);
}

module.exports = isFalsy;
