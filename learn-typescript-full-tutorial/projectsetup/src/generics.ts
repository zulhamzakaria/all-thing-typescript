const toys: Array<string> = [];

function identityOne(val1: boolean, val2: number): boolean {
  return val1;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<T>(val: T): T {
  return val;
}

const cream = identityThree("frog");
identityThree(5);

const user1 = identityThree<User>({
  name: "jonny",
  age: 18,
});

type User = {
  name: string;
  age: number;
};

// type identityThree<T> = T;

// // Now you can use identityThree with the User type
// const result: identityThree<User> = {
//   name: "John",
//   age: 30,
// };

// console.log(result); // { name: 'John', age: 30 }
