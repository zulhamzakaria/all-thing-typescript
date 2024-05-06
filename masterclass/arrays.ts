// handles 'cannot redeclare block-scoped variable 'duties
// cant have variables with similar names in diff files
export {};

const duties: Array<string> = ["cock"];
const duties2: string[] = ["cream"];

duties.push("hen");

// allows for iterated members to call string methods/functions
duties.map((duty) => {
  console.log(duty.toUpperCase());
});

// tuples
// fixed size array
let empLockerCode: [string, number] = ["jonh", 345];
// bug: ts allows an item to be pushed into a tuple e.g ["john", 345, 12] which is wrong by variable definition
empLockerCode.push(12)
