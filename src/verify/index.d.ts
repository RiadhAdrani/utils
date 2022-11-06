type Verifier = boolean | (() => false | void);

/**
 * evaluate the list of statements as long as they are not equal to `false`.
 *
 * return true if all of them passed.
 *
 * a `Verifier` could be a boolean, or a function returning only false in case of failure,
 * other return values will not cause the evaluation to be interrupted.
 * @param verifiers
 */
export default function verify(...verifiers: Array<Verifier>): boolean;
