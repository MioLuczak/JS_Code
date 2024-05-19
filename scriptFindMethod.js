// establishing array  - Random number generated
const numbers = [-7, 7, -5, 11, 6, 16, -14, 15, 16, -13];

function findEvenNumbers(arr) {
  const result = Array.from(arr.filter((element) => element % 2 === 0));
  if (result.length > 0) {
    return result;
  } else {
    return 'Not found';
  }
}
  
console.log(findEvenNumbers(numbers));