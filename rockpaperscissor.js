const rps = (p1, p2) => {
  if (p1 === p2) {
    return `Draw!`
  }
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  }
  if (rules[p1] === p2) {
    return `Player 1 won!`
  } else {
    return `Player 2 won!`
  }
}
