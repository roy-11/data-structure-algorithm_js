function main(input) {
  let height = Number(input);

  let count = 0;
  let sum = 1;
  while (sum - 1 <= height) {
    count++;
    sum *= 2;
  }
  console.log(count);
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
