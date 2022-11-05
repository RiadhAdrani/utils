const copy = require("./src/copy");
const areEqual = require("./src/areEqual");
const isFalsy = require("./src/isFalsy");
const forRange = require("./src/forRange");
const capitalize = require("./src/capitalize");
const isBlank = require("./src/isBlank");
const isEmpty = require("./src/isEmpty");
const wrap = require("./src/wrap");
const hasProperty = require("./src/hasProperty");
const isPrimitiveType = require("./src/isPrimitiveType");
const isHexColor = require("./src/isHexColor");
const isFunction = require("./src/isFunction");
const merge = require("./src/merge");
const isRgbColor = require("./src/isRgbColor");
const since = require("./src/since");
const isHslColor = require("./src/isHslColor");
const isInInterval = require("./src/isInInterval");
const getColorType = require("./src/getColorType");

module.exports = {
    areEqual,
    copy,
    isFalsy,
    forRange,
    isEmpty,
    isBlank,
    wrap,
    capitalize,
    hasProperty,
    isPrimitiveType,
    isHexColor,
    isFunction,
    merge,
    isRgbColor,
    isHslColor,
    isInInterval,
    ...since,
    ...getColorType,
};
