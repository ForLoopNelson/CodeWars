function getDivisorsCnt(n) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (n / i == i) cnt++;
      else cnt = cnt + 2;
    }
  }
  return cnt;
}
