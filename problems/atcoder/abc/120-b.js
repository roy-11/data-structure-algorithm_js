function main(input) {
  const inputs = input.split(" ").map((i) => parseInt(i));
  const a = inputs[0];
  const b = inputs[1];
  const k = inputs[2];
  const yakusuuArray = [];

  for (let i = 100; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) yakusuuArray.push(i);
  }

  console.log(yakusuuArray[k - 1]);
}

main("8 12 2");
main("100 50 4");
main("1 1 1");

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
// https://atcoder.jp/contests/abc120/tasks/abc120_b
