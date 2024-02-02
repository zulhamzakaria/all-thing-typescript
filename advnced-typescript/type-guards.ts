type Circle = { type: "circle" };
type Rectangle = { type: "rectangle"; side: number };

type Shape = Circle | Rectangle;

const shapes: Shape[] = getShapes();

function getShapes(): Shape[] {
  return [];
}

const rec = shapes.find((s): s is Rectangle => s.type == "rectangle");
const side = rec?.side;

const isRec = (s: Shape): s is Rectangle => s.type == "rectangle";
const rec2 = shapes.find(isRec);
const side2 = rec2?.side;
