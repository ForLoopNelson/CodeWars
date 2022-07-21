function positiveSum(arr) {
  const sumof = (acc, c) => acc + (c > 0 ? c : 0)
  return arr.reduce(sumof, 0)
}
