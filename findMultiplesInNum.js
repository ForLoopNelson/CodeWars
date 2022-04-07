function findMultiples(integer, limit) {
  let multiples = [];
  for (let i = integer; i <= limit; i = i + integer) {
    multiples.push(i);
  }
  return multiples;
}
