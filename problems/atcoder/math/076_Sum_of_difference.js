function main(input) {
  let [N, ...A] = input.trim().split(/ |\n/);
  
  A = A.sort((a,b) => a-b)

  let answer = 0n;
  for(let i = 0; i < N; i++){
    answer += BigInt(A[i]) * BigInt((-N + 2 * i + 1));
  }
  console.log(answer.toString(10))
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));


