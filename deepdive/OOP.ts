class Employee {
  name: string;
  dept: string;
  constructor(name: string, dept: string) {
    this.name = name;
    this.dept = dept;
  }
}

const empl1 = new Employee("jones", "engineering");

class Client {
  name: string;
  id: string;
  company: string;
  constructor(name: string, id: string, company: string) {
    this.name = name;
    this.id = id;
    this.company = company;
  }

  public getName(): string {
    return this.name;
  }
  protected getID() {
    return this.getID;
  }
  private getCompany() {
    return this.getCompany;
  }
}

const clientA = new Client("jogn", "12", "SRK");

// invalid requests
// console.log(clientA.getCompany())
// console.log(clientA.getID);

console.log(clientA.getName());

class Person {
  name: string;
  age: string;
  constructor(name: string, age: string) {
    (this.name = name), (this.age = age);
  }
}

class BankEmployee extends Person {
  company: string;
  constructor(name: string, age: string, company: string) {
    super(name, age);
    this.company = company;
  }
}

class Props {
  private _myProp: number = 0;
  get myProperty(): number {
    return this._myProp;
  }
  set myProperty(value: number) {
    this._myProp = value;
  }
}

const prop = new Props();
// set new value
prop.myProperty = 100;
