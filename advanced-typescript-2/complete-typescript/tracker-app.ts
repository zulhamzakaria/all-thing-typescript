// access DOM
const expType = document.getElementById("expense-type")! as HTMLSelectElement;
const expDesc = document.getElementById("desc")! as HTMLInputElement;
const expAmount = document.getElementById("amount")! as HTMLInputElement;
//query sleector for getting the element bt class
const addExpButton = document.querySelector(
  ".add-expense-btn"
)! as HTMLButtonElement;

class Expense {
  static currentId: number = 0;
  id: number = 0;
  type: "credit" | "debit" = "debit";
  description: string = "";
  amount: number = 0;

  constructor(type: "credit" | "debit", desc: string, amount: number) {
    this.type = type;
    this.description = desc;
    this.amount = amount;
    this.id = ++Expense.currentId;
  }
}

addExpButton.addEventListener("click", function (e) {
  e.preventDefault();

  const type = expType.value === "credit" ? "credit" : "debit";

  const exp = new Expense(
    type,
    expDesc.value,
    expAmount.value as unknown as number
  );
  //   const exp = new Expense(expType, expDesc, expAmount);
});
