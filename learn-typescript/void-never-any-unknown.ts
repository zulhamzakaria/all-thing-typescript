// void is a set of null and undefined
// displayName returns void
const displayName = (name: String): void => {
  console.log(name);
};

//any
let someVar: any;
someVar = 1;
someVar = false;
someVar = "1";

//never
// cant have reachable end
// for error?
const displayAge = (name: String): never => {
  throw "never";
  //console.log(name);
};

//unknown
// somewhat more restrictive than any
// cant assign new type to unknown unlike any without typecasting (as)
let vAny: any = 10;
let vUnknown: unknown = 10;

// type cast
let s2: string = vUnknown as string;
