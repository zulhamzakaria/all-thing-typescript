function error(message: string): never {
  throw new Error(message);
}

// cant assign anything else to a never type
// const no:never = 'cock'

// never can be assigned to another type because never doestn return anything
const message: string = error("invalid name");

// this is type string, null, undefined because never is not a 'real' type
type Verbose = string | never | undefined | null;

// returns never is null or undefined
export type NotEmpty<T> = T extends null | undefined ? never : T;

// string
type Example = NotEmpty<string>;
// string
type Example2 = NotEmpty<string | null>;
// string, stirng[]
type Example3 = NotEmpty<string | Array<string> | null>;
