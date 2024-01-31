// assign never to anything else
function errorMessage(message: string): never {
  throw new Error(message);
}
const example: string = errorMessage("Error occurred...");

// conditional type
export type NoEmpty<T> = T extends null | undefined ? never : T;

// type inferred to Example is string
type Example = NoEmpty<string | null>;
// type inferred to Example is string or number
type Example2 = NoEmpty<string | number>;
