function sameCase(a, b) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  if (!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase()))
    return -1;

  const checkCase = (x) => {
    if (x === x.toLowerCase()) return "lower";
    if (x === x.toUpperCase()) return "upper";
  };

  return checkCase(a) === checkCase(b) ? 1 : 0;
}
