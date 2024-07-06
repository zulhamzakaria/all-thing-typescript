console.log("TS");

type Sex = "male" | "female" | "other";

const name: string = "putih";
name.toLocaleUpperCase();
const age: number = 1;
const sex: Sex = "female";

let postcode: number | string;
postcode = 90990;
postcode = "malibu-99";

let response: "success" | "pending" | "error";
response = "error";

let notSure: any;
notSure = 4;
notSure = "error occurred";
notSure = () => {};

let someVar: string | undefined;
if (1 === 1) {
  someVar?.toLocaleUpperCase();
}
console.log(someVar?.length);
