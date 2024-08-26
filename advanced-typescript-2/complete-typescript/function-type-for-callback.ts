const someFunction = (num1: number, print: Function) => {
  //return num1;
  print("sum = ", num1);
};

function display(message: String, num: number) {
  if (num < 1) {
    console.log(message);
    return;
  }
  console.log("invalid request");
}

let someVar = someFunction(10, display);
