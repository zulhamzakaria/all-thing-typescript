function foo(arg: unknown) {
//   const isArgString = typeof arg === "string";
  if (typeof arg === "string") {
    console.log(arg.toLocaleUpperCase());
  }
}
