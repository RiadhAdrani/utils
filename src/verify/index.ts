type Verifier = boolean | (() => boolean | void);

/**
 * evaluate the list of statements as long as they are not equal to `false`.
 *
 * return true if all of them passed.
 *
 * a `Verifier` could be a boolean, or a function returning only false in case of failure,
 * other return values will not cause the evaluation to be interrupted.
 * @param verifiers
 */
export default (...verifiers: Array<Verifier>) => {
  for (const fn of verifiers) {
    if (typeof fn === "function") {
      const res = fn();

      if (res === false) return false;
    } else {
      if (fn === false) return false;
    }
  }

  return true;
};
