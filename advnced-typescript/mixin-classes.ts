class Disposable {
  isDisposed: boolean = false;
  dispose() {
    this.isDisposed = true;
  }
}

class Activatable {
  isActive: boolean = false;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

// combinin classes is called mixin
// takes class as input
const Example = DisposableMixin(
  ActivatableMixin(
    class {
      member = 123;
    }
  )
);

// use mixin as base class
class Exalted extends DisposableMixin(ActivatableMixin(class {})) {
  member = 123;
  constructor() {
    super();
    this.activate();
  }
}

const newClass: Example = new Exalted();

const sample = new Example();

type Example = InstanceType<typeof Example>;

function takeExample(example: Example) {
  const val = example.member;
  example.activate();
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

export function ActivatableMixin<Base extends Class>(base: Base) {
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
