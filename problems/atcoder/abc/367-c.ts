function main(input: string) {
  const newInput = input.trim();
  const [nk, rs] = newInput.split("\n");
  const [n, k] = nk.split(" ").map(Number);
  const r = rs.split(" ").map(Number);

  const rows = generateRows(n, k, r);
  rows.forEach((combination) => {
    console.log(combination.join(" "));
  });
}

function generateRows(n: number, k: number, r: number[]): number[][] {
  const results: number[][] = [];

  function generateSequence(prefix: number[], index: number): void {
    if (index === n) {
      const sum = prefix.reduce((acc, val) => acc + val, 0);
      if (sum % k === 0) {
        results.push([...prefix]);
      }
      return;
    }

    for (let i = 1; i <= r[index]; i++) {
      prefix.push(i);
      generateSequence(prefix, index + 1);
      prefix.pop();
    }
  }

  generateSequence([], 0);

  results.sort((a, b) => {
    for (let i = 0; i < n; i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i];
      }
    }
    return 0;
  });

  return results;
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
