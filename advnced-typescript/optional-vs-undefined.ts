type Optional = {
  name?: string;
};

const string1: Optional = { name: undefined };
const string2: Optional = {};
const string3: Optional = { name: "string" };

function logOptional(msg?: string) {
  console.log(msg);
}

function logUnion(msg: string | undefined) {
  console.log(msg);
}

logUnion(); //not allowed
logOptional(); // allowed
