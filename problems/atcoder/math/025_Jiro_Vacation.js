function main(input) {
  const inputs = input.split("\n");
  let [length, a, b] = inputs;
  length = parseInt(length);
  
  a = a.split(" ").map(e => parseInt(e));
  b = b.split(" ").map(e => parseInt(e));
  
  let sum = 0;
  for(let i = 0; i < length; i++){
    const ab = (a[i] * 1/3) + (b[i] * 2/3);
    sum += ab;
  }
  console.log(sum);
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
