function calculate(...numbers) {
  const product = numbers.reduce(
    (previousValue, number) => previousValue * number,
    1
  );
  console.log(product);
}
console.log('Za pomocą .forEach');
calculate(1, 2, 3, 4);

console.log('');

function calculateWithoutForEach(...args) {
  let multiplicand = 1;
  for (const number of args) {
    let nextNumber = args.indexOf(number + 1);
    if (!isNaN(nextNumber)) {
      multiplicand *= number;
    }
  }
  console.log(multiplicand);
}
console.log('Bez metody .forEach');
calculateWithoutForEach(8,1,2,5);