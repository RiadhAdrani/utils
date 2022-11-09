const isFalsy = require("../isFalsy");
const isFunction = require("../isFunction");
const isPrimitiveType = require("../isPrimitiveType");

/**
 * Create a new instance from the given object.
 * @param {any} source Source object.
 * @returns {any} New instance.
 */
function copy(source) {
  if (isFalsy(source) || isPrimitiveType(source) || isFunction(source)) return source;

  const target = Array.isArray(source) ? [] : {};

  Object.keys(source).forEach((key) => {
    target[key] = copy(source[key]);
  });

  return target;
}

module.exports = copy;
