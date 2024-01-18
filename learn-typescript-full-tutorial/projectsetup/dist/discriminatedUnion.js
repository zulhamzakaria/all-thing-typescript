"use strict";
function getShape(shape) {
    if (shape.type === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //return Math.pow(2, shape.side); or shape.side ** 2
}
// exhaustive check
function getArea(shape) {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return Math.pow(2, shape.side);
        case "rectangle":
            return shape.length * shape.width;
        // checks for additional type
        // "Type is not assignable to type 'never'"
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
const calc = 2 ** 2;
