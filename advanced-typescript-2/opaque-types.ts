export type AcctNumber = number;
export type AcctBalance = number;

function setupAccount(acctNumber: AcctNumber, acctBal: AcctBalance) {}

const accountNum: AcctNumber = 123456789;
const accountBal: AcctBalance = 1234.56;

// mistakenly pass the args
setupAccount(accountBal, accountNum);

// fixes
export type AcctNumber2 = number & { _: "AcctNumber2" };
export type AcctBalance2 = number & { _: "AcctBalance2" };
function setupAccount2(acctNumber: AcctNumber2, acctBal: AcctBalance2) {}

const getAccountNumber = (accountNumber: number): AcctNumber2 =>
  accountNumber as AcctNumber2;
const getAccountBalance = (accountBalance: number): AcctBalance2 =>
  accountBalance as AcctBalance2;

let accountNumber = getAccountNumber(12345678);
let accountBalance = getAccountBalance(123456.78);

setupAccount2(accountNumber, accountBalance);
