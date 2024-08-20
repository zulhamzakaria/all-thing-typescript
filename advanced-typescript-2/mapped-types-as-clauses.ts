export {};

type State = {
  name: string;
  age: number;
};

type Setters = {
  // iterate k?
  // set alias i.e setName, setAge
  // enforce rule so that only string is iterated
  [k in keyof State & string as `set${Capitalize<k>}`]: (
    value: State[k]
  ) => void;
};
