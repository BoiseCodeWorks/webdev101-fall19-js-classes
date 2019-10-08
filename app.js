let myCar = {
  make: "Chevy",
  model: "Tracker",
  year: 1989
};

let yourCar = {
  make: "Nissan",
  model: "Rogue",
  year: 2015,
  gasTank: 100
};

class Car {
  constructor(make, model, year, gasTank, color, sound) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.gasTank = gasTank;
    this.color = color;
    this.sound = sound;
  }
  startCar() {
    console.log(this.sound);
  }

  drive(miles) {
    this.gasTank -= miles;
    if (this.gasTank < 0) {
      this.gasTank = 0;
      console.log("You ran out of gas!");
      return;
    }
    console.log(`You have ${this.gasTank} gallons left.`);
  }
}

myCar = new Car(
  "Chevy",
  "Tracker",
  1989,
  10,
  "Olive Drab",
  "Strange Knocking noises"
);

yourCar = new Car("Nissan", "Rogue", 2015, 100, "Red", "VROOM");

console.log(myCar);
console.log(yourCar);

function driveMyCar(miles) {
  myCar.gasTank -= miles;
  if (myCar.gasTank < 0) {
    myCar.gasTank = 0;
    console.log("You ran out of gas!");
    return;
  }
  console.log(`You have ${myCar.gasTank} gallons left.`);
}

function driveYourCar(miles) {
  yourCar.gasTank -= miles;
  if (yourCar.gasTank < 0) {
    yourCar.gasTank = 0;
    console.log("You ran out of gas!");
    return;
  }
  console.log(`You have ${yourCar.gasTank} gallons left.`);
  console.log("You have " + yourCar.gasTank + " gallons left.");
}
