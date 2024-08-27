export {};

const user = { name: "john", age: 28, dept: "HR" };

// doesnt accept non-existant var unlike array destructuring
// accepts var alias
const { name: userName } = user;
