// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside.

function solution(...numbers) {
  const numbersSorted = numbers.sort((a, b) => a.length > b.length);
  return `${numbersSorted[0]}${numbersSorted[1]}${numbersSorted[0]}`;
}

//short answer

const solution = (a, b) => (a.length < b.length ? a + b + a : b + a + b);
