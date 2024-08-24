export {};

// both are string
const name: string = "sam";
let name2 = "sammy";

function sum(num1, num2) {
  return num1 + num2;
}
const result = sum("12", 13); // this returns 1213 because both args are converted to string since by default it;s of any type
