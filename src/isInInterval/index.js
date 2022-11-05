module.exports = (min, value, max) => {
    if (typeof min !== "number") throw "(min) is not a number.";
    if (typeof max !== "number") throw "(max) is not a number.";
    if (typeof value !== "number") throw "(value) is not a number.";
    if (min > max) throw "(min) is greater than (max).";

    return min <= value && value <= max;
};
