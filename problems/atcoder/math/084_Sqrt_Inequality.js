function main(input) {
  const [a,b,c] = input.split(" ").map(BigInt);
  
  if(c - a - b < 0n) return console.log("No");
  if(4n * a * b < (c - a - b) ** 2n) return console.log("Yes");
  console.log("No");
};
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
