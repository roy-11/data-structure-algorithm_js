function Main(input) {
  const inputs = input.split("\n");
  const aLimit = parseInt(inputs[0],10);
  const bLimit = parseInt(inputs[1],10);
  const cLimit = parseInt(inputs[2],10);
  const targetPrice = parseInt(inputs[3],10);
  
  let patternNum = 0;
  for(let a = 0; a <= aLimit; a++){
    for(let b = 0; b <= bLimit; b++){
      for(let c = 0; c <= cLimit; c++){
        const totalPrice = 500 * a + 100 * b + 50 * c;
        if(targetPrice === totalPrice) patternNum++;
      }
    }
  }
  
  console.log(patternNum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
