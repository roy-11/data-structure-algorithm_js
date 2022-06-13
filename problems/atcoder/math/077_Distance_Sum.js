
function main(input) {
  let [N, ...XY] = input.trim().split(/ |\n/);
  
  let X = [];
  let Y = [];
  for(let i = 0; i < XY.length; i++){
    if(i % 2 === 0) X.push(XY[i]); 
    else Y.push(XY[i]);
  }
 
  X.sort((a,b)=>a-b);
  Y.sort((a,b)=>a-b);
  
  let part1 = 0n;
  for(let i = 0; i < N; i++) part1 += BigInt(X[i]) * BigInt((-N + 2 * i + 1));
    
  let part2 = 0n;
  for(let i = 0; i < N; i++) part2 += BigInt(Y[i]) * BigInt((-N + 2 * i + 1));
  
  console.log((part1 + part2).toString(10))
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));


