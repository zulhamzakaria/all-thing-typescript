class Visibility {
  visible = true;
  toggleVisibility() {
    this.visible = !this.visible;
  }
}

const mockInstance = new Visibility();
if (mockInstance.visible) {
  console.log("displayed");
}

// set "noImplicitOverride": true to force the use of override modifier (tsconfig.json)
class newInstance extends Visibility {
  override toggleVisibility(): void {
    // do somn here
  }
}

export class Disposable {
  isDisposed = false;
  dispose() {
    this.isDisposed = true;
    this.log("disposed");
  }
  log(message: string) {
    console.log(message);
  }
}

export class File extends Disposable {
  override log(message: string): void {}
}
