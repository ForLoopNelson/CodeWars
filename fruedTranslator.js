//returns string with the word sex replacing all other words
const toFreud = (string) =>
  string
    ? string
        .split(" ")
        .map((_) => "sex")
        .join(" ")
    : "";
