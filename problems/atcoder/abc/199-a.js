function main(input) {
  const [a, b, c] = input.split(" ").map(Number);
  console.log(a ** 2 + b ** 2 < c ** 2 ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))
