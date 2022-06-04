function main(input) {
  let [length,...nums] = input.split("\n");
  nums = nums[0].split(" ").map(e => parseInt(e));
  
  const first = Math.abs(nums[0] - nums[1]);
  const cache = [0,first];
  
  for(let i = 2; i < nums.length; i++){
    const jump1step = Math.abs(nums[i] - nums[i-1]) + cache[i-1];
    const jump2step = Math.abs(nums[i] - nums[i-2]) + cache[i-2];
    cache.push(Math.min(jump1step, jump2step));
  }
  
  console.log(cache[cache.length - 1]);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
