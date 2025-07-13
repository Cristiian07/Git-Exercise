// 
// SOLID – Five OOP principles for clean, scalable design


// -----------------
// S – Single Responsibility: one class = one job

// ------
// BAD
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDb() { /* database logic */ } // mixes data + persistence
}
// /------

// ------
// GOOD
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) { /* database logic */ }
}
// /------
// /-----------------


// -----------------
// O – Open/Closed: open for extension, closed for modification

// ------
// BAD
function calculateDiscount(user) {
  if (user.type === 'premium') return 0.2;
  if (user.type === 'basic') return 0.1;
  return 0;
}
// /------

// ------
// GOOD
class DiscountStrategy {
  getDiscount() { return 0; }
}

class PremiumUserDiscount extends DiscountStrategy {
  getDiscount() { return 0.2; }
}

class BasicUserDiscount extends DiscountStrategy {
  getDiscount() { return 0.1; }
}
// /------
// /-----------------


// -----------------
// L – Liskov Substitution: subclasses should be substitutable for base classes
// Rule: If a subclass throws, removes, or changes expected behavior, LSP is broken.

// ------
// BAD
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

function letBirdFly(bird) {
  bird.fly();
}

letBirdFly(new Bird());     // Flying
letBirdFly(new Penguin());  // Error — breaks LSP

// /------

// ------
// GOOD
class Bird {
  move() {
    console.log("Moving");
  }
}

class Sparrow extends Bird {
  move() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  move() {
    console.log("Swimming");
  }
}

function letBirdMove(bird) {
  bird.move();
}

letBirdMove(new Sparrow()); // Flying
letBirdMove(new Penguin()); // Swimming — no errors, LSP holds
// /------
// /-----------------


// -----------------
// I – Interface Segregation: don't force clients to depend on unused methods

// ------
// BAD
class Vehicle {
  drive() {
    console.log("Driving");
  }
  fly() {
    console.log("Flying");
  }
}

class Car extends Vehicle {
  fly() {
    throw new Error("Cars can't fly!");
  }
}
// /------

// ------
// GOOD
class Drivable {
  drive() {
    console.log("Driving");
  }
}

class Flyable {
  fly() {
    console.log("Flying");
  }
}

class Car extends Drivable { }

class Plane extends Drivable { }
// /------
// /-----------------


// -----------------
// D – Dependency Inversion: depend on abstractions, not concrete classes

// ------
// BAD
class ApiService {
  constructor() {
    this.db = new MongoDB(); // tightly coupled
  }
}
// /------

// ------
// GOOD
class ApiService {
  constructor(database) {
    this.db = database; // depends on abstraction
  }
}
// /------
// -----------------