// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n

function eachCons(array, n) {
  return array
    .map((x, y) => array.slice(y, y + n))
    .filter((x) => x.length == n);
}
