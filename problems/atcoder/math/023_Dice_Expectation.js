function main(input) {
  const inputs = input.split("\n");
  const length = inputs[0];
  const first = inputs[1].split(" ").map(e => parseInt(e)).reduce((a,b)=> a + b);
  const second = inputs[2].split(" ").map(e => parseInt(e)).reduce((a,b)=> a + b);
  
  console.log(first/length + second/length)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
