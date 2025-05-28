// Task 2:
// Create a class called Vehicle
// It should have the following properties:
// - brand (string)
// - model (string)
// - year (number)
// - running (boolean)
// - getInfo(): returns vehicle details

// Create a class called Car that extends Vehicle
// It should have the following properties:
// - engineStatus (boolean)
// - start(): starts the engine
// - stop(): stops the engine
// - getInfo(): returns vehicle details

// Create classes that extend Car (ElectricCar, SuperCar)
// Create a class called Motorcycle that extends Vehicle

class Vehicle {
  constructor(brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.running = false;
  }

  getInfo() {
    return `${this.brand} ${this.model} ${this.year} has ${this.mileage} km`;
  }
}

class Car extends Vehicle {
  constructor(
    brand,
    model,
    year,
    mileage,
    numberOfDoors,
    type,
    engine,
    fuelType
  ) {
    super(brand, model, year, mileage);
    this.numberOfDoors = numberOfDoors;
    this.type = type;
    this.engine = engine;
    this.fuelType = fuelType;
  }

  start() {
    this.running = true;
    console.log(this.brand + " " + this.model + " started running!");
  }

  stop() {
    this.running = false;
    console.log(this.brand + " " + this.model + " stoped running!");
  }
}

class ElectricCar extends Car {
  constructor(
    brand,
    model,
    year,
    mileage,
    numberOfDoors,
    type,
    engine,
    battery
  ) {
    super(brand, model, year, mileage, numberOfDoors, type, engine);
    this.fuelType = "electric";
    this.battery = battery;
  }

  start() {
    if (this.battery > 1) {
      console.log(this.brand + " " + this.model + " ready to run!");
    } else {
      console.log("-> Please put to charge!");
    }
  }
  putToCharge() {
    this.battery = 100;
  }
}

const car = new Car("Volvo", "XC90", 2022, 86000, "SUV", 5, 2500, "Diesel");
car.start();

const eCar = new ElectricCar(
  "Tesla",
  "Model3",
  2024,
  45000,
  3,
  "Sedan",
  "Electric",
  0
);
eCar.start();
eCar.putToCharge();
eCar.start();
