function main(input) {
  let [length, nums] = input.split("\n");
  nums = nums.split(" ").map((e) => BigInt(e));

  let numsGCD = nums[0];
  for (let i = 1; i < nums.length; i++) {
    numsGCD = getGCD(numsGCD, nums[i]);
  }

  // let numsGCD = nums.reduce((a,b)=>{
  //  return getGCD(a,b);
  // });
  console.log(numsGCD.toString(10));
}

function getGCD(a, b) {
  while (a >= 1 && b >= 1) {
    if (a > b) a = a % b;
    else b = b % a;
  }

  if (a >= 1) return a;
  return b;
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
