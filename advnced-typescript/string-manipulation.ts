export type UpperCaseSimple<T> = T extends "a" ? "A" : T extends "b" ? "B" : T;

type uppercaseA = UpperCaseSimple<"a">;

export type UpperCaseRecursive<T> = T extends `a${infer Rest}`
  ? `A${UpperCaseRecursive<Rest>}`
  : T;

type abba = UpperCaseRecursive<"abba">;

// alternatively
// other: Lowercase<>, Capitalize<>, Uncapitalize<>
type abba2 = Uppercase<"abba">;

// usage
type Getter<T extends string> = `get${Capitalize<T>}`;
type GetName = Getter<"name">; // getName
