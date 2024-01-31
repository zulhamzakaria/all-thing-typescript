export type Point = {
  readonly x: number;
  // optional
  y?: number;
};

export type Mapped<T> = {
  // iterate thru the T keys and assign each key to P
  [P in keyof T]: T[P];
};

export type ReadonlyMapped<T> = {
  // apply readonly modifier to each key
  readonly [P in keyof T]: T[P];
};

export type OptionalReadonlyMapped<T> = {
  // apply optional modifier (?) to each key
  readonly [P in keyof T]?: T[P];
};

export type Result = Mapped<Point>;

// Partial key works just like loc 9,14,19
export class State<T> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });
state.update({ x: 0, y: 123 });
