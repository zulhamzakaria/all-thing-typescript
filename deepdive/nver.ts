// for F(x) that: throws error, runs infinite loop, variable that can never have value

function deadEnd(errorMsg: string): never {
  throw new Error(errorMsg);
}

function infiniteLoop(): never {
  while (true) {}
}

let x: never;

function neverReturns(): never {
  while (true) {}
}
x = neverReturns();
