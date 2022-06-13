function main(input) {
  const [N, ...A] = input.split(/ |\n/);
  
  let answer = 0;
  for(let i = 0; i < N; i++){
    answer += A[i] * (-N + 2 * i + 1);
  }
  console.log(answer)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
