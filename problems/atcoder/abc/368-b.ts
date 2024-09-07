function main(input: string) {
  const newInput = input.trim();
  const [_nString, aString] = newInput.split("\n");
  const aArray = aString.split(" ").map(Number);

  let count = 0;
  let isDone = false;
  let newArray = aArray;
  while (!isDone) {
    newArray.sort((a, b) => b - a);
    const [first, second, ...rest] = newArray;
    if (second === 0) {
      isDone = true;
      break;
    }

    newArray = [first - 1, second - 1, ...rest];

    count++;
  }

  console.log(count);
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
