export interface IPerson {
  name: string;
  age: number;
}

export interface Employee extends IPerson {
  company: string;
}

export type Person = {
  name: string;
  age: number;
};

export type Employee2 = Person & {
  company: string;
};

// interface supports declaration merging
export interface Addresses {
  homeAddress: string;
}
export interface Addresses {
  billingAddress: string;
}
const details: Addresses = {
  homeAddress: "1",
  billingAddress: "2",
};

// type aliases -> create a new type to use inside of another type

type Methods = "text" | "email";
export type Input = {
  type: Methods;
  value: string;
  onChange: (newVal: string) => void;
};
