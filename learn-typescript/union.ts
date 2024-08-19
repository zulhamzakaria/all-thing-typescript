let username = "alex";
let age = 18;

const postcode: string | number = 85000;
const postcode2: string | number = "85000";

let errorMessage: string | null;

interface IUser {
  name: string;
  age: number;
}

let buyer: IUser | null;

// type aliases
type ID = string | number;

const ids: ID[] = ["123", 123];
