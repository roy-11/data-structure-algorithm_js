function main(input) {
  let [length, p] = input.split("\n")
  length = parseInt(length);
  p = p.split(" ").map(e => parseInt(e));
  
  const maxArray= [p[0], Math.max(p[0],p[1])];
  let max = Math.max(maxArray[0],maxArray[1]);
  
  for(let i = 2; i < p.length; i++){
    const bigger = Math.max(maxArray[i-1], maxArray[i-2] + p[i]);
    maxArray.push(bigger);
    max = Math.max(max, bigger);
  };
  
  console.log(max);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

