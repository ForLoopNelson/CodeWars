function sumDigits(number) {
  return eval(
    number.toString().replace(/\D/g, 0).split("").join().replace(/\D/g, "+")
  );
}
