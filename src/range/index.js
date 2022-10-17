/**
 * generate an array containing the numbers in `start..end`.
 * @param {number} end ending number.
 * @param {number} start starting point. 0 by default.
 * @throw when start > end.
 * @returns {Array<number>}
 */
function range(end, start = 0) {
    if (typeof end != "number" || typeof start != "number") return;

    if (start > end) {
        throw new Error("start number is greater than the end one.");
    }

    const output = [];

    for (let i = start; i < end; i++) {
        output.push(i);
    }

    return output;
}

module.exports = range;
