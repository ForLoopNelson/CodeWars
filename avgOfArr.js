// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  if (array != 0) {
    let avg = total / array.length;
    return avg;
  } else {
    return 0;
  }
}
