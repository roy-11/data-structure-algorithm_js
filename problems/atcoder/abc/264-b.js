function main(input) {
  let [r, c] = input.split(" ").map(Number);

  const distance = Math.max(Math.abs(r - 8), Math.abs(c - 8));
  console.log(distance % 2 === 0 ? "white" : "black");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
