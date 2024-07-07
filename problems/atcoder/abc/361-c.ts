function main(input: string) {
  const newInput = input.trim();
  const [nk, aString] = newInput.split("\n");
  const [n, k] = nk.split(" ").map(Number);
  const aArray = aString.split(" ").map(Number);

  aArray.sort((a, b) => a - b);
  let minDifference = Infinity;
  const length = n - k; // pickupできる数で、n-lengthはパターンの数になる

  for (let i = 0; i <= n - length; i++) {
    const currentDifference = aArray[i + length - 1] - aArray[i];
    if (currentDifference < minDifference) {
      minDifference = currentDifference;
    }
  }

  console.log(minDifference);
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
