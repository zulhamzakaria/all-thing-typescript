// data type is inferred during initialization
let num = 100; // num is number
num = 10;
const str = "100";
// @ts-ignore
str = "10"; //this produces error

// var can only be alphanumeric, with $ and _
// var name cannot start with number
// case sensitive
// no using reserved words i.e interface, type, const etc
let _underscore;
let $dolla;
// let 1Utama // error
let $Dolla;
// let const // error
