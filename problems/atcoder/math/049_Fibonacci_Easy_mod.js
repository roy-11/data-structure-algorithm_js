function main(input) {
  const N = Number(input);

  const mod = 10 ** 9 + 7;
  const fibo = [0,1]
  for (let i = 2; i <= N; i++) {
    fibo[i] = (fibo[i-1] + fibo[i-2]) % mod;
  }

  console.log(fibo[N])
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

