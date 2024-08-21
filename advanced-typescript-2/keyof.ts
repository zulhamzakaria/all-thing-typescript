type Person = {
  name: string;
  age: number;
  location: Record<string, string>;
};

const myAddress: Record<string, string> = {
  line1: "jln taman melati",
  line2: "taman melati",
  line3: "WP KL",
};

const johnson: Person = {
  name: "johnson",
  age: 25,
  location: myAddress,
};

type PersonKeys = keyof Person
