/**
 * @param {any} object
 * @param {string} property
 * @returns {boolean}
 */
function hasProperty(object, property) {
    if (
        ["string", "number", "boolean", "bigint", "undefined", "null", "symbol"].includes(
            typeof object
        )
    )
        return false;

    if ([null, undefined].includes(object)) return false;

    return Object.prototype.hasOwnProperty.call(object, property);
}

module.exports = hasProperty;
