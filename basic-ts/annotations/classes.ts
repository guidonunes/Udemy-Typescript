class Vehicle {
  constructor(public color: string) {}

   honk(): void {
    console.log('beep');
  }
} // class Vehicle

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {

  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "blue");
