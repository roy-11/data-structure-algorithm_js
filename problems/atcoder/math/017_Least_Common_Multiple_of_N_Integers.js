function main(input) {
  let [length, nums] = input.split("\n");
  nums = nums.split(" ").map((e) => BigInt(e));

  let numsLCM = nums.reduce((a, b) => {
    const gcd = getGCD(a, b);
    return getLCM(a, b, gcd);
  });
  console.log(numsLCM.toString(10));
}

function getLCM(a, b, gcd) {
  return (a * b) / gcd;
}

function getGCD(a, b) {
  while (a >= 1 && b >= 1) {
    if (a > b) a = a % b;
    else b = b % a;
  }

  if (a >= 1) return a;
  return b;
}

main("3\n12 18 14");
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
