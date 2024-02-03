// for primitive obsession
export type AcctNumber = number & { _: "AcctNumber" };
export type AcctBalance = number & { _: "AcctBalance" };

const makeAcctNumber = (accountNumber: number): AcctNumber =>
  accountNumber as AcctNumber;
const makeAcctBalance = (accountBalance: number): AcctBalance =>
  accountBalance as AcctBalance;

function setupAccount(acctNumber: AcctNumber, acctBalance: AcctBalance) {
  // do somn here
}

let acctNumber: AcctNumber = makeAcctNumber(9999);
let acctBalance: AcctBalance = makeAcctBalance(15000);

setupAccount(acctNumber, acctBalance);
