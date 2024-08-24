// array of number|string
let person = ["jonny", 28, "male"];
// add an element
person.push("krampus");
//console.log(person.length);

let employee: Array<string | number> | (number | string)[];

let someVar: Array<string> | number;
someVar = 12;
someVar = ["1", "2", "3", "4", "5"];
console.log(someVar.length); // based on the latest defined value
// add noUncheckedIndexedAccess: true setting to avoid out-of-bound error
console.log(someVar[3]);

for (let num of someVar) {
  console.log(num);
}
