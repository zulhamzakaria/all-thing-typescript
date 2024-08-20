export type Name = { name: string };
export type Age = { age: number };

type Union = Name | Age;
type Intersection = Name & Age;

// intersection only accepts the combination of name and age and not only one of them
const name = { name: "jonny" };
const age = { age: 18 };
const nameAndAge = { name: "jonny", age: 18 };

let intersection: Intersection;
intersection = nameAndAge;
// // property age is missing
// intersection = name;
