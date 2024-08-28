let someVar: unknown;

// someVar2 is string
const someVar2 = <string>someVar;
const someVar3 = (someVar as string).toString();
