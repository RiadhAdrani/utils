/**
 * Create a new instance from the given object.
 *
 * This method copies content recursively
 * and could result in an infinite loop with circular reference.
 * @param source Source object.
 */
export default function copy<T>(source: T): T;
