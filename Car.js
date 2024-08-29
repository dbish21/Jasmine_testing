/** Type of vehicle */

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep.";
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

/** Cars are a type of vehicle with 4 wheels. */

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

/** Motorcycles are a type of vehicle with 2 wheels. */

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!!!";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(vehicle);
    return "Vehicle added!";
  }
}// Example usage:
let myFirstVehicle = new Vehicle("Mustang", "Jeep", 1999);
console.log(myFirstVehicle.honk()); // "Beep."
console.log(myFirstVehicle.toString()); // "The vehicle is a Mustang Jeep from 1999."

let myFirstCar = new Car("Audi", "A4", 2005);
console.log(myFirstCar.toString()); // "The vehicle is a Audi A4 from 2005."
console.log(myFirstCar.honk());     // "Beep."
console.log(myFirstCar.numWheels);  // 4

let myFirstMotorcycle = new Motorcycle("Yamaha", "YZF-R6", 2000);
console.log(myFirstMotorcycle.toString()); // "The vehicle is a Yamaha YZF-R6 from 2000."
console.log(myFirstMotorcycle.honk());     // "Beep."
console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels);  // 2

let garage = new Garage(2);
console.log(garage.vehicles); // []
console.log(garage.add(new Car("Audi", "A4", 2015))); // "Vehicle added!"
console.log(garage.vehicles); // [Car]
console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"
console.log(garage.add(new Motorcycle("Yamaha", "YZF-R6", 2000))); // "Vehicle added!"
console.log(garage.vehicles); // [Car, Motorcycle]
console.log(garage.add(new Motorcycle("Yamaha", "YZF-R6", 2001))); // "Sorry, we're full."

// Run the code
myFirstVehicle = new Vehicle("Mustang", "Jeep", 1999);
console.log(myFirstVehicle.honk());
console.log(myFirstVehicle.toString());

myFirstCar = new Car("Audi", "A4", 2005);
console.log(myFirstCar.toString());
console.log(myFirstCar.honk());
console.log(myFirstCar.numWheels);

myFirstMotorcycle = new Motorcycle("Yamaha", "YZF-R6", 2000);
console.log(myFirstMotorcycle.toString());
console.log(myFirstMotorcycle.honk());
console.log(myFirstMotorcycle.revEngine());
console.log(myFirstMotorcycle.numWheels);

garage = new Garage(2);
console.log(garage.vehicles);
console.log(garage.add(new Car("Audi", "A4", 2015)));
console.log(garage.vehicles);
console.log(garage.add("Taco"));
console.log(garage.add(new Motorcycle("Yamaha", "YZF-R6", 2000)));
console.log(garage.vehicles);
console.log(garage.add(new Motorcycle("Yamaha", "YZF-R6", 2001)));

