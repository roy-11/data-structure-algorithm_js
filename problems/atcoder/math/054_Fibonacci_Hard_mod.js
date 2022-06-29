const mod = BigInt(10 ** 9);

function main(input) {
  const N = BigInt(input.trim());
  const powedA = Power(N - 1n)
  console.log((powedA[1][0] + powedA[1][1] % mod).toString(10));
}

function Power(n){
  let answer = null;
  let current = [[1n,1n],[1n,0n]];
  for(let i = 0; i < 60; i++){
    if(Number(n & (2n ** BigInt(i))) !== 0) {
          if(!answer) answer = current;
        else answer = Multiplication(answer,current);
    }
      current = Multiplication(current,current);
  }
  
  return answer;
}

function Multiplication(first,second){
  const result = [[0n,0n],[0n,0n]]
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        result[i][j] += first[i][k] * second[k][j];
        result[i][j] %= mod;
      }
    } 
  }
  return result;
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
