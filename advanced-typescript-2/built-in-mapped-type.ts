export type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Point = { x: number; y: number };

// both x and y of Point become optional
type PartialPoint = Partial<Point>;

class State<T> {
  // public modifier so that it can be accessed by update()
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const newState = new State({ x: 0, y: 0 });
// optional for both x and y
newState.update({ y: 13 });
