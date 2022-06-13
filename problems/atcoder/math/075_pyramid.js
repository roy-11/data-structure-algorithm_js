function main(input) {
  const [N, ...A] = input.split(/ |\n/).map(Number);
  
  const mode = 1000000007;
  let answer = 0;
  for(let i = 0; i < N; i++){
    answer += A[i] * ncr(N-1,i);
    answer %= mode;
  }
  console.log(answer)
}
 
function ncr(n,r){
  let factorialN = 1;
  let factorialR = 1;
  let factorialNminusR = 1;
  for (let i = 2; i <= n; i++) factorialN *= i;
  for (let i = 2; i <= r; i++) factorialR *= i;
  for (let i = 2; i <= n-r; i++) factorialNminusR *= i;
 
  return factorialN / (factorialR * factorialNminusR);
};
 
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
