class BankAccount {
  private static _instance: BankAccount;
  private constructor() {}

  static getDetails() {
    if (BankAccount._instance) return BankAccount._instance;
    BankAccount._instance = new BankAccount();
    return BankAccount._instance;
  }
}

const bankAccount = BankAccount.getDetails();
