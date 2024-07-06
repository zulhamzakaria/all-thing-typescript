// primitive

let firstName = "john";
let isAdmin = false;
let age = 30;

// array is object
let duties = ["write code", "fix bugs"];
// null is perceived as object
let car = null;
let bike = undefined;

const work = () => {
  console.log("working");
};

let salary = 50;
let logo = Symbol("emerald");
let all = [firstName, isAdmin, age, car, bike, duties, work, salary, logo];

for (let item of all) {
  console.log(String(item) + " is " + typeof item);
}
