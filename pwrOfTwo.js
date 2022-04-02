// love flower test example:

// function lovefunc(flower1, flower2) {
//   if (
//     (flower1 % 2 === 0 && flower2 % 2 === 1) ||
//     (flower1 % 2 === 1 && flower2 % 2 === 0)
//   ) {
//     return true;
//   } else {
//     return false;
//   }

// }

// lovefunc(1, 4);

// Power of two
function powersOfTwo(n) {
  let expo = [];
  for (let i = 0; i <= n; i++) {
    expo.push(2 ** i);
  }
  return expo;
}
