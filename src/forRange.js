/**
 * execute a callback for each index of the range specified.
 *
 * returning a non-`undefined` value will cause the loop to break and return that value as a result.
 * @param {number} start starting number. 0 by default.
 * @param {number} end ending number, included.
 * @param {(index : number) => void} callback callback for each index.
 * @returns {any}
 */
function forRange(callback, end, start = 0, step = 1) {
    if (
        typeof callback != "function" ||
        typeof end != "number" ||
        typeof start != "number" ||
        typeof step != "number"
    )
        return;

    for (let i = start; i <= end; i = i + step) {
        const res = callback(i);

        if (res != undefined) return res;
    }
}

module.exports = forRange;
