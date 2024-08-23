type Square = {
  type: "square";
  size: number;
};
type Rectangle = {
  type: "rectangle";
  height: number;
  width: number;
};

type Shape = Square | Rectangle;

// @ts-ignore
const shapes: Shape[] = getShapes();
// is keyword tells TS that the result is always a square
const square = shapes.find((s): s is Square => s.type == "square");
const size = square?.size;

const isSquare = (s: Shape): s is Square => s.type == "square";
