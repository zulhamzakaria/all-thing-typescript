interface Points {
  x: number;
  y: number;
}

function parseCoordinateFromObject(object: Points): Points {
  return { ...object };
}

function parseCoordinateFromNumbers(x: number, y: number): Points {
  //accepts this since Points is made of x(number) and y(number)
  return { x, y };
}

const pointA = parseCoordinateFromObject({ x: 123, y: 908 });
const pointB = parseCoordinateFromNumbers(123, 123);
