const names: string[] = ["cockburn", "pearson", "finger"];
const ids: Array<number> = [1, 2, 3];

names.push("katie");

// console.log(
//   names.map((n) => {
//     return n;
//   })
// );

for (const name of names) {
  console.log(name);
}

// names.forEach((n) => {
//   console.log(n.toUpperCase());
// });

names.pop();

// names.forEach((n) => {
//   console.log(n);
// });

names.push("katie");
names.push("katie");
names.push("katie");

console.log(names);
console.log([...new Set(names)]);

// array multidinmensoional
const matrix: number[][] = [[1,2,3,4]]