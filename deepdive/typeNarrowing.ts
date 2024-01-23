type SomeType = string | number;

function someFunction(value: SomeType) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

class Dog {
  bark(): void {
    console.log("bark");
  }
}

class Cat {
  meow(): void {
    console.log("meow");
  }
}

function instanceChecker(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
