//union type

// string
const postcode: string | number = "999-990";
console.log(postcode);

// number
const postcode2: string | number = 999990;
console.log(postcode2);

type Admin = {
  name: string;
  salary: number;
  isManaged: true;
};

type HOD = {
  name: string;
  salary: number;
  isManager: true;
};

const newHire: Admin | HOD = {
  name: "john wlaker",
  salary: 90000,
  isManaged: true,
};

// inferred type is admin
console.log(newHire);

function getPostcode(id: number | string): string {
  // limited data manipulation due the types
  console.log(`postcode is ${id}`);

  if (typeof id === "string") {
    return "is a string";
  }
  return "is a number";
}
getPostcode(333);
getPostcode("333");

// array
// looks ugly tbh
const data: (number | string)[] = [1, 2, 3, "4"];

let pi: 3.14 = 3.14;
// not allowed as 3.15 <> 3.14
// pi = 3.15;
