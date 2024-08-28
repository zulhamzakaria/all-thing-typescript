// kinda like decorator pattern
// uses functions with special syntax
// uncomment experimentalDecorators setting

@CondimentDecorator('sugar')
class Coffee {
  type: string = "Arabica";
  constructor() {
    console.log("constructor called");
  }
}

function CondimentDecorator(condiment: string) {
  function AddSugar(target: Function) {
    console.log(target);
  }
  return AddSugar;
}

const coffee = new Coffee();
