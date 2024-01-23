let myVar: string | boolean;
function union(myVal: string | number) {}

myVar = "1";
myVar = true;
//wrong
// myVar = 1

type Employee = {
  dept: string;
};
type Client = {
  company: string;
};

const user1: Employee | Client = {
  dept: "R&D",
};

const user2: Employee | Client = {
  company: "betronas",
};

type HOD = {
  readonly isManager: boolean;
};

type TopBrass = Employee & HOD;

const personInPower: TopBrass = {
  dept: "jonny",
  isManager: true,
};

// array of strings of numbers
let items: (number | string)[] = [1, "string"];
