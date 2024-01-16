let greetings: string = "kkkk";
const total: number = 14.34;
let userId: number = 44567;
let isAuthenticated = true;
isAuthenticated = false;

//type inference: auto type casting based on value

/*
wouldnt work

greetings = 6
greetings = true
*/
const lowered = greetings.toLowerCase();

console.log(greetings);
console.log(lowered);
// removes "Cannot redeclare block-scoped variable 'greetings'
export {};
