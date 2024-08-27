interface Details {
  getDetails(name: string, address: string): void;
}

const user1: Details = {
  getDetails(name, address) {
    console.log(`${name} lives at address ${address}`);
  },
};

user1.getDetails("jonni", "123, Spooky Rd.");

interface Soma {
  name: string;
}

const someVar: Soma = { name: "soma" };
console.log(someVar.name);
