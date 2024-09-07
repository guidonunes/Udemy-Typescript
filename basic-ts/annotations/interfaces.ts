interface Reportable {
  summary(): string;
}


const civic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};


const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(civic);
