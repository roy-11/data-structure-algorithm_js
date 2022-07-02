function Main(input) {
  const [nums,targetPrice] = input.split(" ").map(el => parseInt(el,10));
    
  for (let a = 0; a <= nums; a++) {
    for (let b = 0; b + a <= nums; b++) {
      const c = nums - a - b;
      let total = 10000 * a + 5000 * b + 1000 * c;
      if (a + b + c == nums && total == targetPrice) {
        console.log(`${a} ${b} ${c}`)
        return;
      }
    }
  }
  
  console.log("-1 -1 -1")
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
