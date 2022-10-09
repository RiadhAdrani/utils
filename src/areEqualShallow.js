/**
 * Perform a shallow comparison between two objects.
 * @param {any} obj1 first object
 * @param {any} obj2 second object
 * @returns {boolean | undefined}
 */
function areShallowEqual(obj1, obj2) {
    /**
     * compare the two object with the predefined Object.is
     */
    if (Object.is(obj1, obj2)) return true;

    /**
     * making sure both object are of type "object"
     */
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null)
        return false;
}

module.exports = areShallowEqual;
