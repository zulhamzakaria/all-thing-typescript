export {};

type Person = {
  name: string;
  age: number;
  addresses: { address: Address }[];
};
type Address = {
  street: string;
};

export function getName(name: string): name {
  return name;
}

type name = Person["name"];
type billingAddress = Person["addresses"][0];
