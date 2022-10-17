/**
 * return if a string is empty or not.
 *
 * an empty string is the one having no characters.
 * @param {string} value
 * @returns {boolean}
 */
function isEmpty(value) {
    return typeof value !== "string" || value.length === 0;
}

module.exports = isEmpty;
