class Person {
  constructor(public name: string) {}
}

class Buyer extends Person {
  constructor(public name: string, public accountId: string) {
    super(name);
  }
}

class Employee extends Person {
  constructor(public name: string, public employeeId: string) {
    super(name);
  }
}

const emp01 = new Employee("jonni", "emp001");
