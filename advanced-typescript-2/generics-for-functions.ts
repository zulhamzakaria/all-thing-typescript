type A<T> = (x: T) => T;
type B = <T>(x: T) => T;

declare const a: A<string>;
declare const b: B;

const numToNum: A<number> = function (x: number) {
  return x + 10;
};
