function digitize(n) {
  var str = String(n);
  return str.split("").map(Number).reverse();
}
