function main(input) {
  let [n, ...xypairs] = input.split("\n");

  let min = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < xypairs.length; i++){
    const [x1,y1] = xypairs[i].split(" ");
    
    for(let j = i+1; j < xypairs.length; j++){
	  const [x2,y2] = xypairs[j].split(" ");
      const diffx = Math.abs(x1 - x2);
      const diffy = Math.abs(y1 - y2);
      
      const distance = Math.sqrt(diffx ** 2 + diffy ** 2);
      min = Math.min(min,distance)
    }
  }
  
  console.log(min);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
