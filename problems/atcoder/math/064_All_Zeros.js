function main(input) {
  const inputs = input.split("\n");
  const [length, k] = inputs[0].split(" ").map(e => parseInt(e));
  const nums = inputs[1].split(" ").map(e => parseInt(e));
  
  const total = nums.reduce((a,b)=> a+b);
  
  if(k < total) {
    console.log("No");
    return;
  }
  
  console.log(k % 2 === total % 2 ? "Yes" : "No")
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
