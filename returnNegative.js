// Return interger as a negative number. If it is already negative return it without change

function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return -Math.abs(num);
  }
}
