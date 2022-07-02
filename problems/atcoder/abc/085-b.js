function Main(input) {
  const mochisMap = {};
  let count = 0;
  input.split("\n").forEach((m,index)=>{
    if(index !== 0) {
      if(mochisMap[m] === undefined) count++;
      mochisMap[m] = true;
    }
  });
  
  console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

