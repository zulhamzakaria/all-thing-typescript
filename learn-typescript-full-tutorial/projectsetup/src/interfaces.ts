interface Salt {
  natriumContent: number;
  price: number;
  brand: string;
}

class GaramBukit implements Salt {
  natriumContent: number = 30;
  price: number = 1.5;
  brand: string = "Cermin";

  constructor() {
    this.natriumContent = 30;
    this.price = 1.5;
    this.brand = "Cermin";
  }
}

class GaramHalus implements Salt {
  constructor(
    public natriumContent: number,
    public price: number,
    public brand: string
  ) {
    this.natriumContent = natriumContent;
    this.brand = brand;
    this.price = price;
  }
}

const product = new GaramBukit();
// wrong way. need to initiliaze the above line
const product3 = GaramBukit;
const product2 = new GaramHalus(50, 2.0, "masjid biru");
