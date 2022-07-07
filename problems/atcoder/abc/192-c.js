function main(input) {
  const [N, K] = input.split(" ").map(Number);
  
  const result = [N];
  for(let i = 1; i <= K; i++){
    const a = f(result[i-1])
    result.push(a);
  }
  
  console.log(result[K])
}

function f(nums){
  return g1(nums) - g2(nums);
}

function g1(nums){
  let sorted = nums.toString().split("").map(Number).sort((a,b)=>b - a).join("")
  return Number(sorted)
}

function g2(nums){
  let sorted = nums.toString().split("").map(Number).sort((a,b)=>a - b).join("")
  return Number(sorted)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
