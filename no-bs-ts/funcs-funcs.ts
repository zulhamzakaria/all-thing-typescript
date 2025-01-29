export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type MutationFunction = (v: number) => number;

export function mutateArray(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  //each element performs the mutate function
  return numbers.map(mutate);
}

console.log(mutateArray([1, 2, 3], (v) => v + 1));

export function createAdder(num: number) {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
