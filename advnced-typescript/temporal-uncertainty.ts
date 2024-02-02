let suffix: string | null = getSuffix();
if (suffix != null) {
  const suffixLocal = suffix; //type will always be strng
  let exampleOne: string = "jane" + suffixLocal.toUpperCase();
}

function getSuffix(): string | null {
  return "ppp";
}
