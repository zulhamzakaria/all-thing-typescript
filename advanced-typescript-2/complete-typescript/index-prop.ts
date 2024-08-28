interface Product {
  id: number;
  name: string;
  [prop: string]: string | number;
}

const prod1: Product = {
  id: 1,
  name: "shirt",
  color: "white",
  gsm: "280",
};
