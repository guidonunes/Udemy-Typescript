class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
} // class Vehicle

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();

const vehicle = new Vehicle();
vehicle.drive();

vehicle.honk();
