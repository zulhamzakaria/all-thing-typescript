// access DOM
const expType = document.getElementById("expense-type")! as HTMLSelectElement;
const expDesc = document.getElementById("desc")! as HTMLInputElement;
const expAmount = document.getElementById("amount")! as HTMLInputElement;
//query sleector for getting the element bt class
const addExpButton = document.querySelector(
  ".add-expense-btn"
)! as HTMLButtonElement;
const debitDiv = document.querySelector(
  ".expense-debit-item-container"
)! as HTMLDivElement;
const creditDiv = document.querySelector(
  ".expense-credit-item-container"
)! as HTMLDivElement;
const totalAmountDiv = document.querySelector(
  ".total-expense-amount"
)! as HTMLDivElement;

const expenseItems: Expense[] = [];
let totalAmount: number = 0;

class Expense {
  private currentId: number = 0;
  readonly id: number = 0;
  type: "credit" | "debit" = "debit";
  description: string = "";
  amount: number = 0;

  constructor(type: "credit" | "debit", desc: string, amount: number) {
    this.type = type;
    this.description = desc;
    this.amount = amount;
    this.id = ++this.currentId;
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
  expenseItems.push(exp);

  DisplayExpenses();
  totalAmount = calculateTotal();
  ShowTotal();
});
function DisplayExpenses() {
  debitDiv.innerHTML = "";
  creditDiv.innerHTML = "";
  expenseItems.map((item) => {
    let containerDiv = item.type === "credit" ? creditDiv : debitDiv;

    let cssClass = item.type === "credit" ? "credit-item" : "debit-item";
    let template = `
    <div class=${cssClass}>
      <div class='exp-desc'>${item.description}</div>
      <div class='exp-amt'>${item.amount}</div>
      <div class='exp-delete'>
        <button class='delete-expense' onClick='deleteExpense(${item.id})'>X</button>
      </div>
    </div>
    `;

    containerDiv.insertAdjacentHTML("beforeend", template);
  });
}
function calculateTotal() {
  return expenseItems.reduce((total, exp) => {
    let amount = exp.amount;
    if (exp.type === "debit") {
      amount = -exp.amount;
    }
    total += amount;
    return total;
  }, 0);
}
function ShowTotal() {
  totalAmountDiv.textContent = "Bal: " + totalAmount.toString();
}
function deleteExpense(id: number) {
  const expense: Expense = expenseItems.find((item) => {
    return item.id === id;
  }) as Expense;
  const index = expenseItems.indexOf(expense);
  // index -1 == not found
  if (index >= 0) {
    expenseItems.splice(index, 1);
  }
  DisplayExpenses();
}
