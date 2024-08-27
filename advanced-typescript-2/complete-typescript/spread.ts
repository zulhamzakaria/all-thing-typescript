const users: string[] = ["paulie", "jonni"];

console.log(...users);

// spread array is turned into an array
const copyArray = [...users];

const extendedUsers = ["ravi", "mckay", ...users];

const employee1 = { empId: "002", name: "jonni", age: 35 };

const role = { role: "HR", ...employee1 };
