//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

function rentalCarCost(d) {
  let day = d >= 3 && d < 7 ? 20 : 0,
    week = d >= 7 ? 50 : 0

  return d * 40 - day - week
}
