function returnVal(val: number | string): string {
  if (typeof val === "string") {
    return "it's a string";
  }
  return "it's a nubmer";
}

console.log(returnVal(4));
console.log(returnVal("stirng"));

type User = {
  name: string;
  age: number;
};

type Client = {
  company: string;
};

type Employee = {
  dept: string;
};

const client1: User & Client = {
  name: "jonny",
  age: 68,
  company: "starteq",
};

const employee1: User & Employee = {
  name: "jonny",
  age: 68,
  dept: "Admin",
};
