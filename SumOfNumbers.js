// Sum Numbers
function sum(numbers) {
  const sum = numbers.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
}
