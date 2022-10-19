/**
 * @param {any} object
 * @returns {boolean}
 */
function isPrimitiveType(object) {
    return ["string", "number", "bigint", "boolean", "undefined", "symbol", "null"].includes(
        typeof object
    );
}

module.exports = isPrimitiveType;
