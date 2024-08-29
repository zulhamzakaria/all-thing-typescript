class Product {
  private _sku: number;

  // before gettin value, log the interation first
  @AccessLogger
  get sku() {
    return this._sku;
  }

  set sku(value: number) {
    this._sku = value;
  }

  constructor(public name: string) {}
}

function AccessLogger(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  const getter = descriptor.get;
  const setter = descriptor.set;

  descriptor.get = function () {
    console.log("gettin value...");
    if (getter) {
      getter.call(this);
    }
    return undefined;
  };
  descriptor.set = function (value: number) {
    console.log("setting value...");
    if (setter) {
      setter.call(this, value);
    }
  };
  return descriptor;
}
