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
  constructor(user: UserType) {
    user.name = "jonny";
    user.age = 78;
  }
}

export type UserType = {
  name: string;
  age: number;
};

const client = new User("jonny", 18);
