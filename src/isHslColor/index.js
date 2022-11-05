const isBlank = require("../isBlank");

/**
 * @param {string} color
 */
module.exports = (color) => {
    if (isBlank(color)) {
        return false;
    }

    const hslRegEx = /^hsl\((\d{1,3}),( ){0,1}(\d{1,3}),( ){0,1}(\d{1,3})\)$/;
    const hslaRegEx =
        /^hsla\((\d{1,3}),( ){0,1}(\d{1,3}),( ){0,1}(\d{1,3})(,( ){0,1}(\d{1})(\.\d+){0,1}){0,1}\)$/;

    if (hslRegEx.test(color)) {
        const data = color
            .slice(4, -1)
            .split(",")
            .map((i) => parseInt(i.trim()));

        for (let n of data) {
            if (n > 256) return false;
        }

        return true;
    } else if (hslaRegEx.test(color)) {
        const data = color
            .slice(5, -1)
            .split(",")
            .map((i) => parseInt(i.trim()));

        const h = data.slice(0, 3)[0];
        const s = data.slice(0, 3)[1];
        const l = data.slice(0, 3)[2];

        if (360 < h || h < 0) return false;
        if (100 < s || s < 0) return false;
        if (100 < l || l < 0) return false;

        if (data[3] !== undefined && (1 < data[3] || data[3] < 0)) {
            return false;
        }

        return true;
    }

    return false;
};
