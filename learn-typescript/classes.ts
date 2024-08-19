class User implements UserInterface {
  private localFirstName: string;
  private localLastName: string;
  // only accessable thru the class itself i.e User.maxAge like c#
  static readonly maxAge = 35;

  constructor(firstName: string, lastName: string) {
    this.localFirstName = firstName;
    this.localLastName = lastName;
  }

  displayAge(): number {
    return 20;
  }

  getFullName(): string {
    return this.localFirstName + this.localLastName;
  }
}

const user = new User("jonny", "boy");
console.log(user.getFullName());

interface UserInterface {
  displayAge(): number;
}

// inheritacne
class Employee extends User {}
// first and lastname are required
const emp01 = new Employee("skye", "blue");
console.log(emp01.displayAge);
