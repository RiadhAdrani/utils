/**
 * calculate distance between two points in a 2d space with given coordinates.
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 */
export function calcDistance(x1: number, y1: number, x2: number, y2: number): number {
  if (typeof x1 !== "number") throw "(x1) is not a number";
  if (typeof x2 !== "number") throw "(x2) is not a number";
  if (typeof y1 !== "number") throw "(y1) is not a number";
  if (typeof y2 !== "number") throw "(y2) is not a number";

  return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
}

/**
 * calculate distance between two points in a 3d space with given coordinates.
 * @param x1
 * @param y1
 * @param z1
 * @param x2
 * @param y2
 * @param z2
 * @returns
 */
export function calcDistance3d(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): number {
  if (typeof x1 !== "number") throw "(x1) is not a number";
  if (typeof x2 !== "number") throw "(x2) is not a number";
  if (typeof y1 !== "number") throw "(y1) is not a number";
  if (typeof y2 !== "number") throw "(y2) is not a number";
  if (typeof z1 !== "number") throw "(z1) is not a number";
  if (typeof z2 !== "number") throw "(z2) is not a number";

  return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2 + Math.abs(z1 - z2) ** 2);
}
