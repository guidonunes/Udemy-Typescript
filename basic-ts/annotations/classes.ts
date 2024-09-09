class Vehicle {
   honk(): void {
    console.log('beep');
  }
} // class Vehicle

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();

const vehicle = new Vehicle();
car.startDrivingProcess();

vehicle.honk();
