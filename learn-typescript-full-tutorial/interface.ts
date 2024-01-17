// interface

export interface User {
  readonly id: number;
  name: string;
  age: number;
}

export interface Details {
  address: string;
  phoneNumber: string;
}

interface Salary {
  calcSalary: () => number;
  calcBonus(): number;
}

const employee1: Salary = {
  calcSalary: () => {
    return 15000;
  },
  calcBonus: () => {
    return 15000 + (15000 * 15) / 100;
  },
};

// inheritance
interface UserDetails extends User, Details {}

const employee2: UserDetails = {
  id: 89,
  name: "johhny",
  age: 18,
  address: "tmn melati",
  phoneNumber: "999",
};

// reopening interface: adding more stuffs to the interface
interface whatever {
  stuffA: string;
}
interface whatever {
  stuffb: number;
}
const whateverBuilder: whatever = {
  stuffA: "coffee",
  stuffb: 1979,
};
