"use strict";
const toys = [];
function identityOne(val1, val2) {
    return val1;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
const cream = identityThree("frog");
identityThree(5);
const user1 = identityThree({
    name: "jonny",
    age: 18,
});
// type identityThree<T> = T;
// // Now you can use identityThree with the User type
// const result: identityThree<User> = {
//   name: "John",
//   age: 30,
// };
// console.log(result); // { name: 'John', age: 30 }
