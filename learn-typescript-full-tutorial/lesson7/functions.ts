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

export {};
