function noOdds(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      array.push(values[i]);
    }
  }
  return array;
}
