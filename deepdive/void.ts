type Test = {
  money: void;
  fx: () => void;
  fx2: () => { cheese: "somevalue" };
};

const error = (message: string): void => {
  console.log(`Error:${message}`);
  return;
};
