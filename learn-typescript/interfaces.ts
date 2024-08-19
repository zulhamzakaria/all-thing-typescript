interface Person extends Address {
  name: string;
}
interface Address {
  workAddress: string;
  homeAddress: string;
  // optional
  deliveryAddress?: string;
  //function => returns strign
  getAddress(): string;
}

interface Buyer extends Person {
  userId: string;
}

let user01: Buyer = {
  userId: "QWu09mb5",
  name: "jonny",
  workAddress: "",
  homeAddress: "",
  getAddress() {
    return "u live at";
  },
};
