// class implements interface
// interface extends interface

interface Person {
  name: string;
  age: number;
}

interface Person {
  address: string[];
}

interface Role {
  role: "admin" | "user" | "buyer";
}

interface Employee extends Person, Role {
  employeeId: string;
}

const jonni: Employee = {
  name: "jonni",
  age: 25,
  role: "admin",
  employeeId: "FN009",
  address: ["123", "Spooky Rd."],
};

class HR implements Employee {
  constructor(
    public employeeId: string,
    public name: string,
    public age: number,
    public role: "admin" | "user" | "buyer",
    public address: Array<string>
  ) {}
  isAdmin() {
    return this.role === "admin";
  }
}
