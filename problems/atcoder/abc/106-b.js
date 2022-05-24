function main(input) {
  const num = parseInt(input);

  let is8 = 0;
  for (let i = 1; i <= num; i += 2) {
    let yakusuu = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) yakusuu++;
    }

    if (yakusuu === 8) is8++;
  }

  console.log(is8);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
// https://atcoder.jp/contests/abc106/tasks/abc106_b
