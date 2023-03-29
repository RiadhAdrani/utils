/**
 * force cast an object to the given generic type.
 * @param obj source
 */
export const cast = <T = unknown>(obj: unknown): T => {
  return obj as unknown as T;
};

export type Callback<T = void> = () => T;
