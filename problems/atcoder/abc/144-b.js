function main(input) {
  const target = parseInt(input);

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      const kuku = i * j;
      if (target === kuku) {
        console.log("Yes");
        return;
      }
    }
  }
  console.log("No");
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
// https://atcoder.jp/contests/abc144/tasks/abc144_b
