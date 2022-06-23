function main(input) {
  const N = Number(input);
  const nIndex = N + 1;
  const prime = new Array(nIndex).fill(true);
 
  for (let i = 2; i <= nIndex; i++) {
    if (prime[i] === true) {
      for (let j = i + i; j <= nIndex; j+=i) {
        prime[j] = false;
      }
    }
  }
 
  let answer = [];
  for (let i = 2; i <= nIndex; i++) {
    if (prime[i] === true) answer.push(i); 
  }
  console.log(...answer)
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
