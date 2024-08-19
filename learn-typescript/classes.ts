class User {
  private localFirstName: string;
  private localLastName: string;

  constructor(firstName: string, lastName: string) {
    this.localFirstName = firstName;
    this.localLastName = lastName;
  }

  getFullName(): string {
    return this.localFirstName + this.localLastName;
  }
}

const user = new User("jonny", "boy");
console.log(user.getFullName());
