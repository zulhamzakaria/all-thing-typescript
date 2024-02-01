/*
turn all props to readonly
*/
export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Point = { x: number; y: number };

// Point props (x,y) are now readonly (refer loc:5)
type ReadonlyPoint = Readonly<Point>;

const Points: ReadonlyPoint = {
  x: 0,
  y: 0,
};

// not possible
// Points.x = 39;

function makeReadonly<T>(object: T): Readonly<T> {
  // use freeze to make the object read-only
  return Object.freeze({ ...object });
}

const editablePoint = { x: 0, y: 0 };
const ReadonlyPoint = makeReadonly(editablePoint);
// not possible
// ReadonlyPoint.x = 999;
