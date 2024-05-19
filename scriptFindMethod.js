// establishing array  - Random number generated
const numbers = [-7, 7, -5, 11, 6, 16, -14, 15, 16, -13];

function findEvenNumbers(arr) {
  const result = arr.filter((element) => element % 2 === 0);
  return result;
}

console.log(findEvenNumbers(numbers));