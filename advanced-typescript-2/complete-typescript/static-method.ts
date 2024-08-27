class Employee {
  public static count: number = 0;
  constructor(public name: string) {
    Employee.count++;
  }
  greet() {
    return `Hi, ${this.name}`;
  }
  static greet2() {
    return `Hi`;
  }
}

const emp1 = new Employee("jonni");
console.log(Employee.count);
Employee.greet2()