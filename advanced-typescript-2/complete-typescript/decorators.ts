// kinda like decorator pattern
// uses functions with special syntax
// uncomment experimentalDecorators setting

@AddSugar
class Coffee {
  type: string = "Arabica";
  constructor() {
    console.log("constructor called");
  }
}

function AddSugar(target:Function){
    console.log('Adding sugar')
}

const coffee = new Coffee()