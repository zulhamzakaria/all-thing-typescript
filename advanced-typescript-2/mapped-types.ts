export type Coordinate = {
  x: number;
  y: number;
};

type x = Coordinate["x"];
type keys = keyof Coordinate;

export type ReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

// define the value
export const origin: ReadOnly<Coordinate> = {
  x: 10,
  y: 0,
};

// //cannot be changed later
// origin.x = 100;
