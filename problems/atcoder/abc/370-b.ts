function main(input: string) {
  const newInput = input.trim();
  const [nString, ...as] = newInput.split("\n");

  const n = Number(nString);
  const aTable = as.map((a) => a.split(" ").map(Number));

  let i = aTable[0][0];
  for (let j = 2; j <= n; j++) {
    if (i >= j) {
      i = aTable[i - 1][j - 1];
    } else {
      i = aTable[j - 1][i - 1];
    }
  }
  console.log(i);
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
