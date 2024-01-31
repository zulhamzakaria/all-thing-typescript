// generic type for a function
// requires input on generic type
type A<T> = (x: T) => T;
declare const a: A<string>;

const numToNum: A<number> = function (x: number) {
  return x + 10;
};

interface GenericInterfaceForFunction<T> {
  (x: T): T;
}

// type for a generic function
type B = <T>(x: T) => T;
declare const b: B; // doesnt need type annotation since it's not a generic type

const identity: B = function <T>(x: T) {
  return x;
};

interface InterfaceForGenericFunction {
  <T>(x: T): T;
}
