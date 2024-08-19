class User implements UserInterface {
  private localFirstName: string;
  private localLastName: string;

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
