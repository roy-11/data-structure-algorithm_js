function main(input) {
  console.log(input[1] + input[2]);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
