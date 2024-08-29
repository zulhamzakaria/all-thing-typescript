class BankAccount {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  calculateExpenses(@param amount: number) {
    //calculation
  }
}

const account = new BankAccount("jonni");
account.calculateExpenses(900);


function param(target:any, paramName: string, index: number){
    
}