function main(input) {
  const num = parseInt(input);

  let count = 0;
  for (let i = 1; i <= num; i++) {
    const strI = i.toString();
    const keta = strI.length;
    if (keta % 2 !== 0) count++;
  }
  console.log(count);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
// https://atcoder.jp/contests/abc136/tasks/abc136_b
