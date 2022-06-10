function main(input) {
  const n = parseInt(input);
  console.log(n % 2 === 0 ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
