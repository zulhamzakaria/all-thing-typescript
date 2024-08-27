function greet(name: string, age: number, gender?: string) {
  console.log(`name is ${name}`);
}
greet("jonni", 23);

function greet2(name: string, age: number, gender: string = "m") {
  console.log(`name is ${name}`);
}
