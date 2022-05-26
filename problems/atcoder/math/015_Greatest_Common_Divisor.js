function main(input) {
  let [a, b] = input.split(" ");
  a = parseInt(a);
  b = parseInt(b);

  while (a >= 1 && b >= 1) {
    if (a < b) b = b % a;
    else a = a % b;
  }
  if (a >= 1) return a;
  else return b;
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
