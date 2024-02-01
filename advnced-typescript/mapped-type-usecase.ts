// -? denotes that all props are required
export type Required<T> = {
  [P in keyof T]-?: T[P];
};

type PartialPoint = { x?: number; y?: number };

// x and y are required (loc: 3)
type Point = Required<PartialPoint>;

// optional members for consumers
type CircleConfig = {
  color?: string;
  radius?: number;
};

class Circle {
  private config: Required<CircleConfig>;

  constructor(config: CircleConfig) {
    this.config = {
      color: config.color ?? "green",
      radius: config.radius ?? 0,
    };
  }

  draw() {
    console.log("color", this.config.color, "radius", this.config.radius);
  }
}
