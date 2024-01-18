interface Bottle {
  material: string;
  volume: number;
}

function getBottle<T>(bottles: T[]): T {
  const index = 3;
  return bottles[index];
}

const getMoreBottles = <T>(bottles: T[]): T => {
  return bottles[6];
};

let a = { a: 1, b: 2 };
const tipe = typeof a;

interface Database {
  conn: string;
}

function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
  return { val1, val2 };
}
anotherFunction(3, { conn: "localhost;sa;abc123" });

interface Quiz {
  name: string;
  mark: number;
}

interface Course {
  code: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}

const IT = new Sellable<Course>();
