// https://atcoder.jp/contests/abc057/tasks/abc057_c

function main(input) {
  const num = parseInt(input);

  let min = undefined;
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      const max = Math.max(i.toString().length, (num / i).toString().length);

      if (min === undefined) min = max;
      min = Math.min(max, min);
    }
  }
  console.log(min);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

main(10000);
main(1000003);
main(9876543210);
