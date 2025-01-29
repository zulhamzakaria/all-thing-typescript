let username: string;
username = "jack";

let bool: boolean = true;

let regex: RegExp = /foo/;

const names: string[] = username.split(",");

const Person = {
  name: "jack",
  age: 18,
};

type people = {
  name: string;
  age: number;
};

type address = {
  addressLines: string[];
};

type student = people & address;

const student01: student = {
  name: "john",
  age: 19,
  addressLines: ["jln abc", "bandar cde"],
};
