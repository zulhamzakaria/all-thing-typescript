/*

*/
let suffix: string | null = getSuffix();

function getSuffix() {
  return "corn";
}

const nameArray = ["jane", "jon", "james"];

if (suffix != null) {
  let exampleOne: string = "jane" + suffix.toUpperCase();
  nameArray.forEach((name) => {
    console.log(name + suffix?.toUpperCase());
  });

  // this restricts the var to only have string type
  let suffixLocal = suffix;
  ["jon", "burt"].forEach((name) => {
    console.log(name + suffixLocal.toUpperCase());
  });
}
