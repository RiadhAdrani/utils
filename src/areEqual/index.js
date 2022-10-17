const areShallowEqual = require("./areEqualShallow");

/**
 * perform deep comparison of two objects of any type.
 * @param {any} obj1 first object.
 * @param {any} obj2 second object.
 * @param {number} depth maximum comparison depth, `10` by default. This value improve performance with large object and circular dependencies
 * @returns
 */
function areEqual(obj1, obj2, depth = 10) {
    const shallowComparison = areShallowEqual(obj1, obj2);

    if (typeof shallowComparison === "boolean") return shallowComparison;

    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    /**
     * compare the number of keys
     */
    if (key1.length !== key2.length) return false;

    /**
     * compare the keys identifier
     */
    if ([...key1].sort().join("") !== [...key2].sort().join("")) return false;

    /**
     * recursively compare each key value.
     */
    for (let i = 0; i < key1.length; i++) {
        const shallowComparison = areShallowEqual(obj1[key1[i]], obj2[key1[i]]);

        if (shallowComparison === false) return false;

        if (depth > 0) {
            /**
             * We have an object as the value,
             * we recursively compare them.
             */
            if (!areEqual(obj1[key1[i]], obj2[key1[i]], depth - 1)) return false;
        }
    }

    return true;
}

module.exports = areEqual;
