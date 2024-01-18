"use strict";
function getBottle(bottles) {
    const index = 3;
    return bottles[index];
}
const getMoreBottles = (bottles) => {
    return bottles[6];
};
let a = { a: 1, b: 2 };
const tipe = typeof a;
function anotherFunction(val1, val2) {
    return { val1, val2 };
}
anotherFunction(3, { conn: "localhost;sa;abc123" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const IT = new Sellable();
