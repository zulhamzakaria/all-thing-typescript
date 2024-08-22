export type Point = {
  x: number;
  y: number;
  z: number;
};

// create new type with selective elements using  built=in Pick<T>
export type Point2D = Pick<Point, "x" | "y">;
export type Point1D = Pick<Point, "x">;
