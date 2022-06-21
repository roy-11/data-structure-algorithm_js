function main(input) {
  let [NQ, A, ...questions] = input.split("\n");
  const [n,q] = NQ.split(" ").map(Number);
  A = A.split(" ").map(Number);
  questions = questions.map(e => e.split(" ").map(Number));
  
  const ruisekiwa = [0];
  for(let i = 1; i <= n; i++){
    ruisekiwa.push(ruisekiwa[i-1] + A[i-1]);
  }
  
  for(let i = 0; i < q; i++){
    const startday = questions[i][0];
    const endday = questions[i][1];
    console.log(ruisekiwa[endday] - ruisekiwa[startday-1])
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
