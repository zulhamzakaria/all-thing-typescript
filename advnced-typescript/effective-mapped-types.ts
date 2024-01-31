export type Point = {
  x: number;
  y: string;
};

// lookup type
type X = Point["x"];

export type ReadOnlyPoint = Readonly<Point>;

// mapped type
// key type is based of iterated keys
export type ReadOnlyPoint2<T> = {
  readonly [Key in keyof T]: T[Key];
};

// provide the type
export const origin: ReadOnlyPoint2<Point> = {
  x: 0,
  y: "0",
};
