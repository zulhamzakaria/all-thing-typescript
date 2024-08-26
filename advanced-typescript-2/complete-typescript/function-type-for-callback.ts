const someFunction = (
  num1: number,
  print: (msg: string, num: number) => void
) => {
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

// just pass the function without the args
let someVar = someFunction(10, display);
