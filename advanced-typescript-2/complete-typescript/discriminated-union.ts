interface Circle {
  type: "circle";
  radius: number;
}

interface Square {
  type: "square";
  length: number;
}

type Shape = Circle | Square;

function calcArea(shape: Shape) {
  //   return "radius" in shape ? shape.radius * 3.14 : shape.length * 2;
  switch (shape.type) {
    case "circle":
      return 3.14 * shape.radius;
    case "square":
      return shape.length * 2;
    default:
      return undefined;
  }
}
