export type Point = {
  readonly x: number;
  y?: number;
};

const point1: Point = {
  x: 10,
};

point1.y = 100;

export type Mapped<T> = {
  readonly [p in keyof T]: T[p];
};

// all of Point elements become readonly because the mapped type [p in keyof Point]
export type point2 = Mapped<Point>;
