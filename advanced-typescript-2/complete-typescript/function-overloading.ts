type stringOrNumber = string | number;

function addition(var1: number, var2: number): number;
function addition(var1: string, var2: string): string;
function addition(var1: stringOrNumber, var2: stringOrNumber) {
  if (typeof var1 === "string" || typeof var2 === "string") {
    return var1.toString() + var2.toString();
  }
  return var1 + var2;
}
