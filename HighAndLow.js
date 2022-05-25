// you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  const arr = numbers
    .split(" ")
    .map((item) => Number(item))
    .sort((a, b) => b - a);
  return String(arr[0] + " " + String(arr[arr.length - 1]));
}
