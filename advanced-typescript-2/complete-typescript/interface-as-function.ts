type someFunction = (num: number) => number;

interface someFunctionInterface {
  (num1: number, num2: number): number;
}

const add: someFunctionInterface = (num1: number, num2: number) => {
  return num1 + num2;
};
