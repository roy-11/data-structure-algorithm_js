function main(input) {
  const [a,b] = input.split(" ").map(Number);
  
  let answer = 1;
  for(let i = 1; i <= b; i++){
    if(syomondai(a,b,i)) answer = i;
  }
  
  console.log(answer);
}

function syomondai(a,b,t) {
  const cl = Math.ceil(a/t);
  const cr = Math.floor(b/t);
  if(cr - cl >= 1) return true;
  return false;
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
