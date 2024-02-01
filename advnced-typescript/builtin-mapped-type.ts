/*
make all props in T optional
*/
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

class State<T> {
  constructor(public current: T) {}
  // only need to pass in the properties you want to change
  update(next: Partial<T>) {
    // assign next value to this.current
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });
state.update({ y: 123 }); // Partial (loc: 5).
console.log(state.current);
