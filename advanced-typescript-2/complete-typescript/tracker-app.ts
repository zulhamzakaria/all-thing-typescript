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

const expenseItems: Expense[] = [];

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
        <button class='delete-expense'>X</button>
      </div>
    </div>
    `;

    containerDiv.insertAdjacentHTML("beforeend", template);
  });
}
