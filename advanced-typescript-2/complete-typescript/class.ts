class User {
  constructor(
    public name?: string,
    public age?: number,
    public gender?: string
  ) {}

  displayDetails() {
    console.log(`a ${this.gender} student named ${this.name}, age ${this.age}`);
  }
}

const user1 = new User();
