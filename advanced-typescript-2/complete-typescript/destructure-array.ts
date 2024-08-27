// tuple is an array with defined types and length
export {};

const Person = ["john", 28];

// just like object destructuring
// accepts default value
// works with _ for ignoring unneeded value
const [name, age, dept = "HR"] = Person;
