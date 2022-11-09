const areEqual = require("./src/areEqual");
const capitalize = require("./src/capitalize");
const convertColor = require("./src/convertColor");
const copy = require("./src/copy");
const forRange = require("./src/forRange");
const generateColor = require("./src/generateColor");
const getColorType = require("./src/getColorType");
const hasProperty = require("./src/hasProperty");
const isBlank = require("./src/isBlank");
const isEmpty = require("./src/isEmpty");
const isFalsy = require("./src/isFalsy");
const isFunction = require("./src/isFunction");
const isHexColor = require("./src/isHexColor");
const isHslColor = require("./src/isHslColor");
const isInInterval = require("./src/isInInterval");
const isPrimitiveType = require("./src/isPrimitiveType");
const isRgbColor = require("./src/isRgbColor");
const merge = require("./src/merge");
const range = require("./src/range");
const since = require("./src/since");
const verify = require("./src/verify");
const wrap = require("./src/wrap");

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
  isInInterval,
  verify,
  range,
  ...isRgbColor,
  ...isHslColor,
  ...since,
  ...getColorType,
  ...generateColor,
  ...convertColor,
};
