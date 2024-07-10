console.log("TS");

type Sex = "male" | "female" | "other";

const name: string = "putih";
name.toLocaleUpperCase();
const age: number = 1;
const sex: Sex = "female";

let postcode: number | string;
postcode = 90990;
postcode = "malibu-99";

let response: "success" | "pending" | "error";
response = "error";

let notSure: any;
notSure = 4;
notSure = "error occurred";
notSure = () => {};

let someVar: string | undefined;
if (1 === 1) {
  someVar?.toLocaleUpperCase();
}
console.log(someVar?.length);

// array
let prices: Array<number> = [100, 75, 99];
let names: string[] = ["100", "75", "99"];
let unionArray: (string | number)[] = ["susan", 19];
// array manipulation

interface Person {
  name: string;
  age: number;
}

const employees: Person[] = [
  { name: "jonny", age: 19 },
  { name: "lopetegui", age: 44 },
];

employees.push({ name: "roxy", age: 25 });

// alert(employees.length);

let villagers: Person[] = [{ name: "karm", age: 59 }];
let moreVillagers = [...villagers, { name: "whitnet", age: 44 }];

const originalArray = [{ name: "Alice" }, { name: "Bob" }];

// Shallow copy (both arrays share the same objects)
const shallowCopy = [...originalArray];
shallowCopy[0].name = "Eve"; // Also changes originalArray[0].name

// Deep copy (new array with new objects)
const deepCopy = JSON.parse(JSON.stringify(originalArray));
deepCopy[1].name = "Charlie"; // Doesn't affect originalArray[1].name

let fruits: string[] = ["apple", "orange", "pear"];
fruits.pop();

fruits.splice(1, 1);

const numbers = [2, 3, 4, 5, 6];
const doubled = numbers.map((num) => num * 2);
