function main(input) {
  let [a,b,c] = input.split(" ").map(BigInt);
  
  const as = a * (a + 1n) / 2n;
  const bs = b * (b + 1n) / 2n;
  const cs = c * (c + 1n) / 2n;
  
  const mod = 998244353n;
  console.log((as * bs * cs % mod).toString(10));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
