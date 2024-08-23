// !! is not-not
let age = 0;
let hasAge;

console.log(Boolean(age)); //false
console.log(!!age); //false

type Prizes = {
  first: "gold";
  second: "silver";
};

let key: keyof Prizes;
