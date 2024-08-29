export {};

class Inventory {
  @required
  product: string;
  @required
  sku: string;

  constructor(product: string, sku: string) {
    this.product = product;
    this.sku = sku;
  }
}

const prod1 = new Inventory("android tablet", "AT-0009");

function required(target: any, propName: string) {
  // get class name
  validateObject[target.constructor.name] = {
    [propName]: ["required"],
  };
}

function validate(obj: object): boolean {
  return true;
}

if (!validate(prod1)) {
  alert("invalid input");
} else {
  console.log("item added successfully");
}

interface IValidator {
  [prop: string]: {
    [propKey: string]: string[]; // stores the validation decorators that are being used
  };
}

const validateObject: IValidator = {};
