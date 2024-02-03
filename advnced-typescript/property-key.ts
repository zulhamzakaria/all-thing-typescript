type ValidKey = keyof any;
let example: ValidKey;

//alternatively...
let example2: PropertyKey;

example = "str";
example = 123;
example = Symbol();
