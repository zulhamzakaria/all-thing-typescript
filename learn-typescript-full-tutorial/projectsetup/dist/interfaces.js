"use strict";
class GaramBukit {
    constructor() {
        this.natriumContent = 30;
        this.price = 1.5;
        this.brand = "Cermin";
        this.natriumContent = 30;
        this.price = 1.5;
        this.brand = "Cermin";
    }
}
class GaramHalus {
    constructor(natriumContent, price, brand) {
        this.natriumContent = natriumContent;
        this.price = price;
        this.brand = brand;
        this.natriumContent = natriumContent;
        this.brand = brand;
        this.price = price;
    }
}
const product = new GaramBukit();
// wrong way. need to initiliaze the above line
const product3 = GaramBukit;
const product2 = new GaramHalus(50, 2.0, "masjid biru");
