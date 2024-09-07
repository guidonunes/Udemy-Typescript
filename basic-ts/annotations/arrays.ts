const carMakes: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values

const car = carMakes[0];
const myCar = carMakes.pop();

// Prevent incompatible values
carMakes.push('mercedes');

// Help with 'map'
carMakes.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
