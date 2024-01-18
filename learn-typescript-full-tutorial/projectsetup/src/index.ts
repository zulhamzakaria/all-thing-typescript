class User {
  name: string;
  age: number;
  // readonly effective outside of constructor
  private readonly ssn: string = "JN908872-43KL";
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.ssn = "000";
  }
}

class User2 {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

class UserFromType {
  private _courseCount = 1;

  constructor(user: UserType) {
    user.name = "jonny";
    user.age = 78;
  }

  get genEmail(): string {
    return `mail@mail.com`;
  }

  get CurseCount(): number {
    return this._courseCount;
  }

  set CourseNumber(courseNumber: number) {
    this._courseCount = courseNumber;
  }
}

export type UserType = {
  name: string;
  age: number;
};

const client = new User("jonny", 18);

class Employee {
  protected salary: number = 0;
  constructor(public name: string, public employeeId: string) {
    this.name = name;
    this.employeeId = employeeId;
  }
}

class HOD extends Employee {
  isManager = true;
  getSalary() {
    this.salary = 15000;
  }
}
