class Person {
  public name: string;
  private _age: number | null = null;

  get age() {
    if (this._age != null) {
      return this._age;
    }
    throw new Error();
  }

  set age(value: number) {
    if (value < 0) {
      return;
    }
    this._age = value;
  }

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("jonni");
person.age = 78;
console.log(person.age);
