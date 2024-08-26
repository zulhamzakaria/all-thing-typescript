function someFunction(user: { name: string }) {
  //do somn
}

let func: Function;
let func2: () => void;

// @ts-ignore
func = 100 // this produces error