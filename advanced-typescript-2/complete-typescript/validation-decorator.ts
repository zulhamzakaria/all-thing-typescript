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
  let previousElement: string[] = [];
  if (validateObject[target.constructor.name]) {
    // if it;s empty, assign a value. else u'd get undefined error
    previousElement = validateObject[target.constructor.name][propName] ?? [];
  }

  // get class name
  validateObject[target.constructor.name] = {
    // spread operator so that the the validators are piled-up
    // get the object only if it exists
    ...validateObject[target.constructor.name],
    [propName]: [...previousElement, "required"],
  };
}

function validate(obj: object): boolean {
  const validateClass = validateObject[obj.constructor.name];
  // no validation decorator in-use, so it's undefined
  if (!validateClass) {
    return true;
  }

  let isValid = true;

  for (let prop in validateClass) {
    for (let elem of validateClass[prop]) {
      switch (elem) {
        case "required":
          //@ts-ignore
          isValid = isValid && !!obj[prop];
          break;
      }
    }
  }

  return isValid;
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
