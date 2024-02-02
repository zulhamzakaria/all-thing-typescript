const nums: Array<number> = [0, 1, 2];

// add "noUncheckedIndexedAccess": true to tsconfig.json>"compilerOptions"

const example: number = nums[3]; // error inducing

const people: { [id: number]: string } = Object.create(null);

people[34] = "clawg";
people[35] = "blawg";

const someVal = people[999]?.trim();
