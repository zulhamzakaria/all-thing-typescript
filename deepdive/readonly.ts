type Client = {
  name: string;
  age: number;
  company?: string;
  readonly idNo: string;
};

const client1: Client = {
  name: "roseanne",
  age: 19,
  company: "sdradeq",
  idNo: "KMH-90991",
};

client1.age = 20;
// cant reassign value
// client1.idNo = "PYP-655901";
