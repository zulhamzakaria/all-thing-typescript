class Employee {
  constructor(public salary: number) {}
  calculateBonus() {
    return 2 * this.salary;
  }
}

class Manager extends Employee {
  constructor(public salary: number) {
    super(salary);
  }
  calculateBonus(): number {
    return 3 * this.salary;
  }
}
