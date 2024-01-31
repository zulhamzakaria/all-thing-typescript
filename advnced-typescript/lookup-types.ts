export type Person = {
  personal: {
    name: string;
    age: number;
    gender: string;
  };
  work: {
    company: string;
  };
  houses: {
    address: string;
    value: number;
  }[];
};

export function getCompany(): Person["work"] {
  return {
    company: "starhub",
  };
}

// aleternatively...
type companyType = Person["work"];
export function getCompany2(): companyType {
  return {
    company: "starhub",
  };
}

// for finding specific item in an array
type house = Person['houses'][0]