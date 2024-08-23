const str: string = "key";
const num: number = 1234;
const sym: symbol = Symbol();

const valid = {
  [str]: "valid",
  [num]: "valid",
  [sym]: "valid",
};

const obj = {};

const invalid = {
  [obj]: "invalid",
};

type ValidKey = PropertyKey;
