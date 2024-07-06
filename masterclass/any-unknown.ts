// any disables type check
// object vs any: cant pass method to object unlike any.
let queryResult: any = 5;
queryResult = "5";
queryResult = [5];

// unknown forces type-narrowing
function getSalary(emplId: number): unknown {
  return JSON.parse("5");
}

export {};
let salary = getSalary(123);
if (typeof salary === "number") {
  salary++;
}
if (typeof salary === "string") {
  salary.includes("$");
}
