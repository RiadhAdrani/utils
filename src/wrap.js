/**
 * wrap a string around two others.
 * @param {string} value input.
 * @param {string} wrapper start wrapper.
 * @param {string} wrapperEnd end wrapper. if no value is provided, the value of the wrapper will be used instead
 * @returns {string}
 */
function wrap(value, wrapper = "'", wrapperEnd = wrapper) {
    return `${wrapper}${value}${wrapperEnd}`;
}

module.exports = wrap;
