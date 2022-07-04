function main(input) {
  let [NX, A] = input.split("\n");
  let [N, X] = NX.split(" ").map(BigInt);
  A = A.split(" ").map(Number);

  const answer = A.filter(a => BigInt(a) !== X);
  console.log(answer.join(" "))
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
