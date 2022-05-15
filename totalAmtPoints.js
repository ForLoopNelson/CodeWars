function points(games) {
  let totalPoints = 0;

  for (const game of games) {
    const [scoreX, scoreY] = game.split(":");
    const points = scoreX > scoreY ? 3 : scoreX === scoreY ? 1 : 0;
    totalPoints += points;
  }

  return totalPoints;
}
