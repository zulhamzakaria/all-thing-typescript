type abba = Uppercase<"abba">;

// @ts-ignore
// this doesnt work since it's a type
// other type Capitalize<>, Lowercase<>, Uncapitalized<>
const capitalized = Uppercase<"abba">;

type Getter<T extends string> = `get${Capitalize<T>}`;

type Name = "name";
type GetName = Getter<Name>;

type getName2 = Getter<"name">;
