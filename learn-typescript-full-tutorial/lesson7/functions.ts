//functionssss
// to run the file,
// convert the .ts to .js using this command: tsc function.ts
// then run this command: node function.js
function Sum(a: number, b: number): number {
  return a + b;
}

console.log(Sum(5, 4));

// typecastin
let value: any = Sum(5, 4);
// value is inferred as any as i'ts not dictated by RHS
// toString() converts while as, <> tells TS the type
value = (value as string) || <string>value;

function getUpper(val) {
  // no intellisense but it;s not showing any error
  return val.toUpperCase();
}
function getUpperWithString(val: string) {
  return val.toUpperCase();
}

// arrow function with default value for age
let fx1 = (name: string, age: number = 10) => {};

function returnString(): string {
  return "hello";
}

// function thata ccepts another function as argument
// need to have similar signature just like delegates in c#
function processor(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

function add(x: number, y: number) {
  return x + y;
}

processor(1, 5, add);

//multitype return????
// union type
function returnAnything(a: number, b: number): boolean | string {
  if (a === b) return true;
  return "not similar";
}

// arrow function
const hello = (s: string): string => {
  return "";
};

//arrow fx tht accepts string and return string
const heroes = ["plastincman", "batman"];
heroes.map((hero: string): string => {
  return `hero is ${hero}`;
});

// never: terminates the program i.e throwing error
// void: holds data (undefined or null)
function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
  // type string not assignable to never
  //return "cock"
}

export {};
