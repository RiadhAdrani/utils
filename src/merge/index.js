const hasProperty = require("../hasProperty");

/**
 * @param  {...object} objects
 */
const merge = (...objects) => {
    if (objects.some((o) => typeof o !== "object")) {
        throw new Error("Some/All arguments are not of type (object).");
    }

    return objects.reduce((output, object) => {
        Object.keys(object).forEach((key) => {
            if (!hasProperty(output, key)) {
                output[key] = object[key];
            } else {
                if (
                    typeof object[key] !== "object" ||
                    typeof output[key] !== "object" ||
                    output[key] === null ||
                    object[key] === null
                ) {
                    output[key] = object[key];
                } else {
                    output[key] = merge(output[key], object[key]);
                }
            }
        });

        return output;
    }, {});
};

module.exports = merge;
