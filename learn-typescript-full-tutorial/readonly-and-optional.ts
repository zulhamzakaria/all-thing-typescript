// readonly and optional

// readonly
// address is optional; like nullable in c#
type Person = {
  readonly name: string;
  age: number;
  address?: string;
};

function createUser(usr: Person): Person {
  // not allowed
  // usr.name = "corn";
  usr.age = 18;
  return usr;
}

// readonly only effective on permutation not on creation of a new object
function createUser2(usr: Person): Person {
  // not allowed
  // usr.name = "corn";
  usr.age = 18;
  return { name: "nana", age: 19 };
}

// object creation
const user: Person = {
  name: "distance",
  age: 18,
};

// not allowed; permutation
//user.name = "cockburn";

//function
let add: (a: number, b: number) => number;
add = (a, b) => a + b;
const result = add(3, 4);

type Postcode = {
  postcode: string | number;
};

const userPostcodeInString: Postcode = {
  postcode: "999",
};

const userPostcodeInNumber: Postcode = {
  // : is used because of type annotation
  postcode: 999,
};

// composite type
type CCNumber = {
  cardNumber: number;
};

type accountHolder = {
  name: string;
};

type bankDetails = {
  branch: string;
};

type userDetails = CCNumber & accountHolder & bankDetails;

type userDetails2 = CCNumber &
  accountHolder &
  bankDetails & {
    address: string;
  };

type userDetails3 = CCNumber & accountHolder & bankDetails & {};

const UserAccountDetails: userDetails = {
  cardNumber: 999,
  name: "jonny",
  branch: "desa pandan",
};

const userAccountDetails2: userDetails2 = {
  cardNumber: 999,
  name: "jonny",
  branch: "desa pandan",
  address: "keramat",
};

const userAccountDetails3: userDetails3 = {
  cardNumber: 999,
  name: "jonny",
  branch: "desa pandan",
};

export {};
