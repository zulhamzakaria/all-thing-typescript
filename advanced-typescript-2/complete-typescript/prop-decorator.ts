function Capitalize(target: any, propKey: string): any {
  let value: string;
  const getter = function () {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };
  const setter = function (newValue: string) {
    value = newValue.toLowerCase();
  };

  return {
    get: getter,
    set: setter,
  };
}

/*
"compilerOptions": {
  "useDefineForClassFields": true
}
*/

class Product {
  @Capitalize
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
