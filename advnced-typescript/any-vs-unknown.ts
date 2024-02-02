let exampleAny: any;
let exampleUnknown: unknown;

exampleAny.allows.for.questionable.chaining();

// unknown is saer than any
// exampleUnknown.trim(); // not allowed

// when using unknown, it's required to do type checking
function log(value: unknown) {
  if (typeof value == "number") {
    console.log(value + 2);
  } else {
    console.log("stirng");
  }
}
