// tuples
// because const is immutable, value is required when declaring the variable
const users: string[] = ["hc"];

//tuple
const details: [string, number] = ["john", 18];

console.log(details[0]);

// object with named properties
// better than tuple?
const details2: { name: string; age: number } = { name: "jonny", age: 18 };
console.log(`the name is ${details2.name} and age is ${details2.age} y.o`);

// composite
type Address = {
  addressline: string;
  city: string;
  postcode: string | number;
};

type User = {
  name: string;
  age: number;
};

const userDetails: [Address, User] = [
  {
    addressline: "no 4 taman melati 1",
    city: "k.l",
    postcode: 45609,
  },
  { name: "johhny", age: 16 },
];

export {};
