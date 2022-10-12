const isEmpty = require("./isEmpty");

/**
 * return if a string is blank or not.
 *
 * a blank string is the one having no characters after being trimmed.
 * @param {string} value
 * @returns {boolean}
 */
function isBlank(value) {
    return typeof value !== "string" || isEmpty(value.trim());
}

module.exports = isBlank;
