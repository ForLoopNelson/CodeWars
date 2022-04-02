function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let str = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == "T") {
      str += "U";
    } else {
      str += dna[i];
    }
  }
  return str;
}
