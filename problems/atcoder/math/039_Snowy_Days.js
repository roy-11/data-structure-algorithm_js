function main(input) {
  let [NQ, ...lrx] = input.trim().split("\n");
  const [n,q] = NQ.split(" ").map(Number);
  lrx = lrx.map(e => e.split(" ").map(Number));
  
  const array = new Array(n+1).fill(0);
  for(let i = 0; i < q; i++){
    const l = lrx[i][0]-1;
    const r = lrx[i][1]-1;
    const x = lrx[i][2];
    
    array[l] += x;
    array[r+1] -= x;
  }
 

  let answer = ""
  for(let i = 1; i < n; i++){
    if(array[i] > 0) answer += "<";
    if(array[i] === 0) answer += "=";
    if(array[i] < 0) answer += ">";
  }
  console.log(answer);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
