// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  if (arr.length > 1) {
    return Math.abs(Math.min(...arr) - Math.max(...arr));
  } else {
    return 0;
  }
}
