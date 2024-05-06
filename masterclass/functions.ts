// set noImplicitAny to false inside the tsconfig to turn offimplicit any type error
function greet(name: string) {
  return `hello, ${name}`;
}

// this turns name to optional
function greet2(name = "don") {
  return name;
}

function greetAll(names: string[]) {
  names.forEach((name) => {
    console.log(name);
  });
}

function greetAllSpread(...names: string[]) {
  names.forEach((name) => {
    console.log(name);
  });
}

greetAll(["peeta", "mon", "sany"]);
// ... allows for the use if individual strings as args
greetAllSpread("spread", "peeta", "mon", "sany");
