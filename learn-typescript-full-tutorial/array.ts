//arrays

// array of type string
const superHeroes: string[] = [];
superHeroes.push("supes");

const heroesRating: number[] = [];
const heroesRating2: Array<number> = [];

type User = {
  name: string;
  age: number;
};

const allUsers: User[] = [];
allUsers.push(
  { name: "john", age: 18 },
  { name: "clara", age: 21 },
  { name: "patel", age: 56 }
);

// nested of arrays
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6, 7],
  [9, 0],
];
