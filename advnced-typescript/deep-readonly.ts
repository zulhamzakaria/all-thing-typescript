type DeepReadOnly<T> = {
  readonly [P in keyof T]: DeepReadOnly<T[P]>;
};

type Example = {
  a: {
    b: number;
  };
};

let example: DeepReadOnly<Example> = {
  a: {
    b: 123,
  },
};

// not allowed
// example.a.b = 456;
