type Shape =
  | { type: "circle"; radius: number }
  | { type: "square"; side: number };

function area(shape: Shape): number {
  const { type } = shape;
  const isCircle = type === "circle";
  if (isCircle) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.side ** 2;
  }
}
