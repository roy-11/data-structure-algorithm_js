function main(input) {
  let [n, a] = input.trim().split("\n");
  n = Number(n);
  a = a.split(" ").map(Number);

  let samenum = 0;
  let exchange = 0;
  for (let i = 0; i < n; i++) {
    const num = a[i];
    const pairIndex = num - 1;

    if (a[pairIndex] === i + 1) {
      const num2 = a[pairIndex];
      const pairIndex2 = num2 - 1;

      if (a[pairIndex2] === num) {
        if (num !== num2) exchange++;
        if (num === num2) samenum++;
      }
    }
  }

  exchange = Math.floor(exchange / 2);
  samenum = Math.floor((samenum * (samenum - 1)) / 2);
  console.log(samenum + exchange);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
