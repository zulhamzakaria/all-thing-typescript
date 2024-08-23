type ExampleOptional = {
  name?: string;
};

let optional: ExampleOptional;

optional = { name: undefined };
optional = {};

type ExampleUnion = {
  name: string | undefined;
};

let union: ExampleUnion;
union = { name: undefined };
// name is still required tho it might be undefined
union = {};
