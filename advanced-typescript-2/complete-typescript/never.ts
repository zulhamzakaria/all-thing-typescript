const func = (): never => {
//   throw new Error("never");
  throw({message:'some error', code: 404})
};
