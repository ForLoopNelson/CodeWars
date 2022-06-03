// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

function billboard(name, price = 30) {
  let num = 0
  for (i = 0; i < name.length; i++) {
    num += price
  }
  return num
}
