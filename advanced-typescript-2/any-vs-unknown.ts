let anyVar: any;
let unknownVar: unknown;

anyVar.this.is.not.checked();
let anyBoolean: boolean = anyVar;

// @ts-ignore more restrictive
unknownVar.trim();
// @ts-ignore more restrictive
let unknownBoolean: boolean = unknownVar;
// unkwown can be cast to another type
if (typeof unknownVar === "string") {
  console.log(unknownVar.toLowerCase());
}
