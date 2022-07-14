function main(input) {
  const [A, B] = input.trim().split(" ");
  const gcdNum = gcd(Math.max(A,B), Math.min(A,B));
  const lcmNum = lcm(A,B,gcdNum);
  console.log(lcmNum);
};

function gcd(a,b){
  if(a % b === 0) return b;
  return gcd(b, a % b)
};

function lcm(A,B,gcdNum){
  const lcmNum = (A*B) / gcdNum
  return lcmNum;
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

