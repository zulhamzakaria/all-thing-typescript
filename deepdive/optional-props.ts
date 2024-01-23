function printUser(name: string, age: number, email?: string) {
  console.log(`${name}, ${age}, ${email ?? "no email provided"}`);
}

printUser("sean", 29);
printUser("lje", 26, "mail@mail.com");

type User = {
  name: string;
  age: number;
  mail?: string;
};
