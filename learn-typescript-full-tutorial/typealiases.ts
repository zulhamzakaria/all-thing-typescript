// type aliases

// type comes with variable types
// const comes with value?
/*
 TypeScript allows them to share the same name as long as they exist in separate namespaces 
 (types and variables have different namespaces)
*/
type User = {
  name: string;
};
const User = {
  name: "Kish",
};

const constUser = {
  name: "Kish",
};

function returnUser({ name }: User): string {
  // able to return var name since it's been destructured i.e {}
  return name;
}

returnUser(constUser);

export {};
