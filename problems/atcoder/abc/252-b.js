function main(input) {
  const inputs = input.split("\n");
  const points = inputs[1].split(" ").map((p)=>parseInt(p,10));
  const hates = inputs[2].split(" ").map((h)=>parseInt(h,10));;
  
  let maxPoint = 0;
  points.forEach((p)=>{
    if(p > maxPoint){
      maxPoint = p;
    }
  })
  
  for(let i = 0; i < hates.length; i++){
    if(points[hates[i]-1] === maxPoint){
      console.log("Yes");
      return;
    }    
  }
  console.log("No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
