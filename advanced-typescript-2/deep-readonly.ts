// recursive read-only
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

type Example = {
  a: { b: number };
};

let example: DeepReadonly<Example> = {
  a: {
    b: 123,
  },
};

// @ts-ignore
example.a.b = 123; // error
