//generics

function genericFunction<T>(value: T): string {
  if (typeof value === "string") {
    return "string type";
  }
  return "other type";
}

console.log(genericFunction("string"));

interface Dog {
  breed: string;
}

const cupcake = genericFunction<Dog>({ breed: "rotty" });

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  val: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];

  return { key: randKey, val: obj[randKey] };
}

const stringObject = { a: "apple", b: "pear", c: "mango" };
const result = getRandomKeyValuePair<string>(stringObject);
console.log(result);

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];

const evenNumber = filterArray<number>(numbers, (num) => num % 2 === 0);

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "apple", color: "red" },
  { name: "orange", color: "orange" },
];

const redFruit = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "red"
);

function reversePair<T, U>(val1: T, val2: U): [U, T] {
  return [val2, val1];
}

const reversedPair = reversePair("hello", 20);

class Box<T> {
  private content: T;
  constructor(initialContent: T) {
    this.content = initialContent;
  }
  getContent(): T {
    return this.content;
  }
  setContent(val: T) {
    this.content = val;
  }
}
