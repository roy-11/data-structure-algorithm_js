function main(input) {
  let [N, A, B] = input.split("\n");
  N = Number(N);
  A = A.split(" ").map(Number);
  B = B.split(" ").map(Number);
  
  let naiseki = 0;
  for(let i = 0; i < N; i++){
    naiseki += A[i] * B[i];
  }
  
  console.log(naiseki === 0 ? "Yes" : "No")
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
