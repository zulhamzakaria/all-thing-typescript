function getPropValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

getPropValue({ name: "jonnie", age: 21 }, "name");
// erorr since gender key doesnt exist
// @ts-ignore
getPropValue({ name: "jonnie", age: 21 }, "gender");
