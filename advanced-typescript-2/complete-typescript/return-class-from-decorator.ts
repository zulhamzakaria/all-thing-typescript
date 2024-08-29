@Logger
class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

function Logger(target: new (...args: any) => {}): any {
  class LoggingClass extends target {
    static institution: string = "UMT";
    constructor(...args: any[]) {
      // calls the parent class like u'd do with base/sub class
      super(...args);
      console.log("new logging class");
    }
  }
  return LoggingClass;
}

const student01 = new Student("jonni");
