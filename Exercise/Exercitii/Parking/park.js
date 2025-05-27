// Car Parking System Exercise
// Create a class hierarchy for a car parking system

// 1. Create a base Vehicle class with:
//    - properties: licensePlate, make, model, entryTime
//    - methods: calculateParkingFee() that returns a base fee

// 2. Create at least two subclasses (Car, Electric car, Motorcycle, etc.) that inherit from Vehicle
//    - Override calculateParkingFee() with different rates for each vehicle type

// 3. Create a ParkingLot class that:
//    - Manages a collection of parked vehicles
//    - Has methods to park and remove vehicles
//    - Calculates fees when vehicles leave
//    - Handles special spots for electric vehicles

class Vehicle {
  constructor(licensePlate, make, model, entryTime = new Date()) {
    this.licensePlate = licensePlate;
    this.make = make;
    this.model = model;
    this.entryTime = new Date(entryTime);
  }

  calculateParkingFee() {
    return;
  }
}

class Car extends Vehicle {
  constructor(licensePlate, make, model, entryTime) {
    super(licensePlate, make, model, entryTime);
  }
  calculateParkingFee(exitTime) {
    const exit = new Date(exitTime);
    const hoursPark = (exit - this.entryTime) / (1000 * 60 * 60);
    const hourlyRate = 5;
    return hoursPark * hourlyRate;
  }
}

class eCar extends Vehicle {
  constructor(licensePlate, make, model, entryTime) {
    super(licensePlate, make, model, entryTime);
  }
  calculateParkingFee(exitTime) {
    const exit = new Date(exitTime);
    const hoursPark = (exit - this.entryTime) / (1000 * 60 * 60);
    const hourlyRate = 5;
    return hoursPark * hourlyRate;
  }
}

class Motorcycle extends Vehicle {
  constructor(licensePlate, make, model, entryTime) {
    super(licensePlate, make, model, entryTime);
  }
  calculateParkingFee(exitTime) {
    const exit = new Date(exitTime);
    const hoursPark = (exit - this.entryTime) / (1000 * 60 * 60);
    const hourlyRate = 5;
    return hoursPark * hourlyRate;
  }
}

class ParkingLot {
  constructor() {
    this.vehicleList = [];
  }

  parkedVehicle(vehicle) {
    this.vehicleList.push(vehicle);
    console.log(` ${vehicle.licensePlate} a parcat.`);
  }

  exitVehicle(licensePlate, exitTime) {
    const newVehicleList = this.vehicleList.filter(
      (vehicle) => vehicle.licensePlate !== licensePlate
    );
    if (newVehicleList.length === this.vehicleList) {
      console.log(`License Plate not found`);
    } else {
      this.calculateFee(licensePlate, exitTime);
    }
  }

  calculateFee(licensePlate, exitTime) {
    const vehicle = this.vehicleList.find(
      (vehicle) => vehicle.licensePlate === licensePlate
    );
    const paidFee = vehicle.calculateParkingFee(exitTime);
    console.log(
      ` ${vehicle.licensePlate} a parasit parcarea. A platit ${paidFee}`
    );
  }
}

const regularCar = new Car(
  "ABC123",
  "Toyota",
  "Corolla",
  "2024-03-20T13:00:00"
);
const electricCar = new eCar(
  "XYZ789",
  "Tesla",
  "Model S",
  "2024-03-21T10:00:00"
);
const motorcycle = new Motorcycle(
  "MOTO456",
  "Harley",
  "Sportster",
  "2024-03-21T16:00:00"
);
const parkingLot = new ParkingLot();
parkingLot.parkedVehicle(regularCar);
parkingLot.parkedVehicle(electricCar);
parkingLot.parkedVehicle(motorcycle);
parkingLot.exitVehicle("ABC123", "2024-03-20T18:00:00");
