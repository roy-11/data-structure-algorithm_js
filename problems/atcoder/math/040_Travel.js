function main(input) {
  let [N, distances, M, ...B] = input.trim().split("\n");
  N = Number(N);
  distances = distances.split(" ").map(Number);
  M = Number(M);
  B = B.map(Number);
  
  const ruisekiwa = [0n];
  for (let i = 0; i < distances.length; i++) {
    ruisekiwa.push(BigInt(ruisekiwa[i])+BigInt(distances[i])) 
  }

  let answer = 0n;
  for (let i = 1; i < M; i++) {
    const to = B[i]-1;
    const from = B[i-1]-1;
    
    let distance = ruisekiwa[to] - ruisekiwa[from];
    distance = distance > 0 ? distance : distance * -1n;

    answer += distance;
  }

  console.log(answer.toString(10))
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
