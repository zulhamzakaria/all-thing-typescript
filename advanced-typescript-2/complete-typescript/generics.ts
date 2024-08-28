const someVar = () => {};

function someFunction<T>(value: T) {
  if (typeof value === "string") return "is a string";
  return "not a string";
}

console.log(someFunction<string>("123"));
console.log(someFunction<number>(123));

function someGenericFunction<T extends object, U>(obj1: T, obj2: U) {
  //do somn
}
