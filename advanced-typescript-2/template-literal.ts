export {};

let person;
const name = "jonny";
const age = 19;
person = `${name} ${age}`;

// this will accept any string as denoted by the ${string}
let templateLiteral: `Example:${string}`;

templateLiteral = "Example: timun";
templateLiteral = "Example: pisang";
templateLiteral = "Example: terung";
//invalid
// templateLiteral = "1Example: terung";

type CSSValue = number | string;

function size(input: CSSValue) {
  return typeof input == "number" ? input + "px" : input;
}
// no checking on invalid value
size("12xy");

// to remedy that, use template literal
// this tells TS to only accept the suffix px for string
type CSSValue2 = number | `${number}px`;

//manipulation
type Size = "lg" | "md" | "sm";
type Color = "blue" | "yellow" | "green";
type Style = `${Size}-${Color}`;
let selectStlye: Style = "lg-blue";
// not valid
// selectStlye = 'md-banana'
