class Visibility {
  visible = true;
  setVisibility(visible: boolean) {
    this.visible = visible;
  }
}

// override to safeguard the class from changes inside the extended class
// can be enforced with tsconfig settings
class MockVisibility extends Visibility {
  override setVisibility(visible: boolean): void {
    console.log(visible ? "block" : "none");
  }
}

const real = new Visibility();
real.setVisibility(true);
real.setVisibility(false);

const mock = new MockVisibility();
mock.setVisibility(true);
mock.setVisibility(false);
