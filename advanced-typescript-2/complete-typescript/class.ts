class User {
  private lastName: string;
  phoneNumber: string;
  constructor(
    phoneNumber: string,
    lastName: string,
    public name?: string,
    public age?: number,
    public gender?: string
  ) {
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

  displayDetails() {
    console.log(`a ${this.gender} student named ${this.name}, age ${this.age}`);
  }
}

const user1 = new User("0198908900", "smith");
user1.phoneNumber = "0177899090";
