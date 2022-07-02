function Main(input) {
  let count = 0;
  for(let i = 0; i < input.length; i++){
    if(input[i] === "1") count++;
  }
  console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
