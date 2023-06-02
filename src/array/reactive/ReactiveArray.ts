import { Callback, areEqual } from "../../index.js";

export default class ReactiveArray<T> extends Array<T> {
  onChanged: Callback = () => 0;

  constructor(items: Array<T>, onChanged: () => void) {
    super(...items);

    this.onChanged = onChanged;
  }

  get items(): Array<T> {
    return [...this];
  }

  push(...items: T[]): number {
    const count = super.push(...items);

    if (items.length > 0) {
      this.onChanged();
    }

    return count;
  }

  pop(): T | undefined {
    const before = this.length;

    const item = super.pop();

    const after = this.length;

    if (before !== after) {
      this.onChanged();
    }

    return item;
  }

  shift(): T | undefined {
    const before = this.length;

    const item = super.shift();

    const after = this.length;

    if (before !== after) {
      this.onChanged();
    }

    return item;
  }

  unshift(...items: T[]): number {
    const before = this.length;

    const count = super.unshift(...items);

    const after = this.length;

    if (before !== after) {
      this.onChanged();
    }

    return count;
  }

  reverse(): T[] {
    const items = super.reverse();

    if (this.length > 1) {
      this.onChanged();
    }

    return items;
  }

  // TODO splice not working

  sort(compareFn?: ((a: T, b: T) => number) | undefined): this {
    const old = [...this.items];

    const sorted = super.sort(compareFn);

    if (!areEqual(old, this.items)) {
      this.onChanged();
    }

    return sorted;
  }

  fill(value: T, start?: number | undefined, end?: number | undefined): this {
    const old = [...this.items];

    const filled = super.fill(value, start, end);

    if (!areEqual(old, filled.items)) {
      this.onChanged();
    }

    return filled;
  }

  copyWithin(target: number, start: number, end?: number | undefined): this {
    const old = [...this.items];

    const updated = super.copyWithin(target, start, end);

    if (!areEqual(old, this.items)) {
      this.onChanged();
    }

    return updated;
  }
}