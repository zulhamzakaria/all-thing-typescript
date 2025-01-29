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

const name2 = student01.name;

let newVar: Record<string, string>;

const ids: Record<string, number> = {
  john: 20,
  kid: 22,
};
ids["tom"] = 16;

// satisfies only work on type?
if (ids["ellis"] === 22) {
  [1, 2, 3, 4].forEach((v) => console.log(v));
}
