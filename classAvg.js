function betterThanAverage(classPoints, yourPoints) {
  const average =
    classPoints.reduce((acc, c) => acc + c, 0) / classPoints.length;

  return average > yourPoints ? false : true;
}
