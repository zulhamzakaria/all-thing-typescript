type stringOrNumber = string | number;

function someFunction(someVar: stringOrNumber) {
  return typeof someVar === "string" ? "it's a string" : "it's a number";
}
