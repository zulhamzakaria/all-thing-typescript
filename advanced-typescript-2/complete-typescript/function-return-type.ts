// this returns string
function greet(name: string) {
  return `hi, ${name}`;
}

// string can be assigned to unknown
function greet2(name: string): unknown {
  return `hi, ${name}`;
}

// must return null
function returnNull(): null {
  return null;
}

function dontReturn(): void | undefined | any {
  // doesnt have to return anything
}
