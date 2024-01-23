interface Face {
  eyeColor: string;
  earShape: string;
  noseSize: string;
}

const CatFace: Face = {
  eyeColor: "amber",
  earShape: "pointy",
  noseSize: "small",
};

interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;

interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("car stopped");
  }
  stop() {
    console.log("car stopped");
  }
}

const Boat: Vehicle = {
  start() {
    console.log("boat starts");
  },
  stop() {
    console.log("boat stops");
  },
};

// declaration merging
interface Car {
  brand: string;
  engine: string;
}
interface Car {
  start(): void;
}

const Vios: Car = {
  brand: "Toyota",
  engine: "V10",
  start() {
    console.log("car is starting...");
  },
  stop() {
    console.log("car has stopped...");
  },
};
