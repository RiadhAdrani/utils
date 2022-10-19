const isBlank = require("../isBlank");

/**
 *
 * @param {string} color
 * @returns
 */
function isHexColor(color) {
    if (isBlank(color)) return false;

    const three = /^#[0-9|a|b|c|d|e|f]{3}$/;
    const six = /^#[0-9|a|b|c|d|e|f]{6}$/;
    const eight = /^#[0-9|a|b|c|d|e|f]{8}$/;

    return three.test(color) || six.test(color) || eight.test(color);
}

module.exports = isHexColor;
