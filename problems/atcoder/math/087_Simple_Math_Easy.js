function main(input) {
  const n = BigInt(input);
  
  const val = n * (n + 1n) / 2n;
  const mod = 1000000007n;
  console.log((val ** 2n % mod).toString(10));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
