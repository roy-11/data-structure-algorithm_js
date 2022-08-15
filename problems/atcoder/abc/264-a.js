function main(input) {
  let [l, r] = input.split(" ").map(Number);
  console.log("atcoder".slice(l - 1, r));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

function main(input) {
  let [l, r] = input.split(" ").map(Number);
  console.log("atcoder".substr(l - 1, r - l + 1));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

function main(input) {
  let [l, r] = input.split(" ").map(Number);
  const str = "atcoder";

  let answer = "";
  for (let i = l - 1; i < r; i++) {
    answer += str[i];
  }
  console.log(answer);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
