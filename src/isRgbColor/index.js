const isBlank = require("../isBlank");

/**
 * @param {string} color
 */
module.exports = (color) => {
    if (isBlank(color)) {
        return false;
    }

    const rgbRegEx = /^rgb\((\d{1,3}),( ){0,1}(\d{1,3}),( ){0,1}(\d{1,3})\)$/;
    const rgbaRegEx =
        /^rgba\((\d{1,3}),( ){0,1}(\d{1,3}),( ){0,1}(\d{1,3})(,( ){0,1}(\d{1})(\.\d+){0,1}){0,1}\)$/;

    if (rgbRegEx.test(color)) {
        const data = color
            .slice(4, -1)
            .split(",")
            .map((i) => parseInt(i.trim()));

        for (let n of data) {
            if (n > 256) return false;
        }

        return true;
    } else if (rgbaRegEx.test(color)) {
        const data = color
            .slice(5, -1)
            .split(",")
            .map((i) => parseInt(i.trim()));

        for (let n of data.slice(0, 3)) {
            if (n > 256) return false;
        }

        if (data[3] !== undefined && (1 < data[3] || data[3] < 0)) {
            return false;
        }

        return true;
    }

    return false;
};
