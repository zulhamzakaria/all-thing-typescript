// always annotate function parameter with type
function getMessage(message: string) {
  return "message";
}

const powerOfTwo = (x: number) => {
  return x * x;
};

console.log(getMessage("Hello world"));
console.log(powerOfTwo(9));
