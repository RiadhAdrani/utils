export default function omit<T>(object: T, ...keys: Array<keyof T>): Omit<T, typeof keys[number]> {
  const out = { ...object } as T;

  Object.keys(out as Record<string, unknown>).forEach((key) => {
    if (keys.includes(key as keyof T)) {
      delete out[key as keyof T];
    }
  });

  return out as Omit<T, typeof keys[number]>;
}
