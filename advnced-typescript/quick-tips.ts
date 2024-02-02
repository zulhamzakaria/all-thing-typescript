// type annotation
export type Person = {
  name: string;
  age: number;
};

declare const user: Person;
user.age = 19;
user.name = "clawg";

// union type
export type Admin = {
  name: string;
  id: string;
  privilege: string;
};
export type Client = {
  name: string;
  company: string;
  privilege: string;
};

export type jonny = Admin | Client;

// in operator
export function printUser(user: jonny) {
  if ("role" in user) {
    console.log("jonnys a client");
  }
  console.log("jonnys an admin");
}

// is operator
export function isAdmin(user: jonny): user is Admin {
  return user.privilege === "admin"; // only allows for returning similar attrs
}

// mapped type : Partial<User>
