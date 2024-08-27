abstract class Employee {
  constructor(public name: string) {}
  abstract getSalary(): number;
}

class Permanent extends Employee{
    getSalary(): number {
        return 1000
    }
}

class Intern extends Employee{
    getSalary(): number {
        return 450
    }
}