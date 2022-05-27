function main(input) {
  let [n,r] = input.split(" ");
  n = parseInt(n);
  r = parseInt(r);

  let factorialN = 1;
  let factorialR = 1;
  let factorialNminusR = 1;
  for (let i = 2; i <= n; i++) factorialN *= i;
  for (let i = 2; i <= r; i++) factorialR *= i;
  for (let i = 2; i <= n-r; i++) factorialNminusR *= i;

  console.log(factorialN / (factorialR * factorialNminusR));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
