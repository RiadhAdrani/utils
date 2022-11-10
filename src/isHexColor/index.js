const isBlank = require("../isBlank");

/**
 *
 * @param {string} color
 * @returns
 */
function isHexColor(color) {
  if (isBlank(color)) return false;

  const three = /^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{3}$/;
  const six = /^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{6}$/;
  const eight = /^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{8}$/;

  return three.test(color) || six.test(color) || eight.test(color);
}

module.exports = isHexColor;
