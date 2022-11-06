module.exports = (...verifiers) => {
    for (let fn of verifiers) {
        if (typeof fn === "function") {
            const res = fn();

            if (res === false) return false;
        } else {
            if (fn === false) return false;
        }
    }

    return true;
};
