interface Person extends Address {
  name: string;
}
interface Address {
  workAddress: string;
  homeAddress: string;
}

interface Buyer extends Person {
  userId: string;
}

let user01: Buyer = {
  userId: "QWu09mb5",
  name: "jonny",
  workAddress: "",
  homeAddress: "",
};
