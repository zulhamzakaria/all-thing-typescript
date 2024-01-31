/*
tsconfig.json: lib option kinda extends the usable library.
while it's targeting es5, lib allows for es6 libs. lib is
independent on target

for JS, use polyfills
how to:
    1. npm i core-js
    2. import 'core-js';

{
 "compilerOptions":{
    "target": "es5",
    "lib": [
        "es6"
    ]
 }
}

*/
