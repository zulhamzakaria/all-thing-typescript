let car = { make: "ford", color: "mustard" };
let person = { name: "blawg", age: 12 };

// doesnt take primitive type as key
const objToVal = new WeakMap();
objToVal.set(car, 9000);
objToVal.set(person, Infinity);
// objToVal.set(999, "corn"); // invalid
