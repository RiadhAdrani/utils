/**
 * capitalize the given string.
 * @param {string} value
 * @returns {string}
 */
function capitalize(value) {
    if (typeof value !== "string") return value;

    return value.substring(0, 1).toUpperCase() + value.substring(1);
}

module.exports = capitalize;
