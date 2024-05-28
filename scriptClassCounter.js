class Counter {
  constructor(startFrom) {
    if (startFrom != undefined) {
      this.number = startFrom;
    } else this.number = 0;
  }

  increment() {
    this.number++;
  }
}

// Staring new Counter without param
let myCounter = new Counter();
console.log(myCounter);
myCounter.increment();
console.log(myCounter);

console.log('');
// Starting new Counter from defined number
let mySecondCounter = new Counter(5);
console.log(mySecondCounter);
mySecondCounter.increment();
mySecondCounter.increment();
mySecondCounter.increment();
console.log(mySecondCounter);
