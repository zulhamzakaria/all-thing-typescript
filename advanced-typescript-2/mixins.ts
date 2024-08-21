class Disposable {
  isDisposed: boolean = false;
  dispose() {
    this.isDisposed = true;
  }
}

class Activable {
  isActive: boolean = false;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

export type Class = new (...args: any[]) => any;

export function DisposableMixin<Base extends Class>(base: Base) {
  return class extends base {
    isDisposed: boolean = false;
    dispose() {
      this.isDisposed = true;
    }
  };
}
export function ActivableMixin<Base extends Class>(base: Base) {
  return class extends base {
    isActive: boolean = false;
    activate() {
      this.isActive = true;
    }
    deactivate() {
      this.isActive = false;
    }
  };
}

// class that accepts another class as arg
const Example = DisposableMixin(ActivableMixin(class {}));
type Example = InstanceType<typeof Example>;

function takeExample(example: Example) {
  example.deactivate();
}

// creating a class that extends the mixin classes will let the new class to inherit all of the classes members
class Example2 extends DisposableMixin(ActivableMixin(class {})) {
  member = 123;
  constructor() {
    super();
  }
}
function takeExample2(example: Example2) {
  example.deactivate();
  example.member = 334;
}
