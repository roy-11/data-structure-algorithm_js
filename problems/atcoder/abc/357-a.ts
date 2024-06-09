function main(input: string) {
  const newInput = input.trim();
  const [numAndLimit, handsByMan] = newInput.split("\n");
  const [_num, limit] = numAndLimit.split(" ").map(Number);
  const handsByManArray = handsByMan.split(" ").map(Number);

  let count = 0;
  let sum = 0;
  for (let hands of handsByManArray) {
    sum += hands;
    if (sum > limit) {
      break;
    }
    count++;
  }

  console.log(count);
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
