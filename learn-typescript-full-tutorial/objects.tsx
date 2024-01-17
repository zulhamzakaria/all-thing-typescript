// bad behaviours of object

const user = {
  email: "mail@mail.com",
  isActive: true,
};

// {name, isPaid} == destructuring
function createUser({ email: string, isActive: boolean }) {}

// permissible; similar args
createUser(user);

function createPremiumUser({ email: string, isRich: boolean }) {
  return "Premium";
}

createPremiumUser({ email: "mail.mail@mail.com", isRich: true });

// this function returns an object
function createStuffs(): { name: string; courseId: number } {
  return { name: "jubo", courseId: 2223 };
  // this doesnt work. need to explicitly declare the return values
  // TS doesnt infer the types automatically somehow
  //return { "jubo", 2223 };
}

// extra values
function createWhatever({ name: string }) {
  return { name: "whatever" };
}
const whatever = {
  name: "kish",
  age: 56,
};
createWhatever(whatever);

export {};
