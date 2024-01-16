// any
let hit, hit2;
function getHeroAsAny() {
  return "batman";
}
function getHeroAsString(): string {
  return "flash";
}
// value returned as type any
hit = getHeroAsAny();
hit2 = getHeroAsString();
// hit2 type is still any
// infer the type during the creation of the variable
console.log(hit2 + hit);
