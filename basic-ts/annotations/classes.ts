class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
} // class Vehicle

const vehicle = new Vehicle();
vehicle.drive();

vehicle.honk();
