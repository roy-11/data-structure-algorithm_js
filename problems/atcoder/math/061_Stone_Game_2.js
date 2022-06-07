function main(input) {
  const num = parseInt(input)
  
  let answer = false;
  for (let i = 1; i < 60; i++) {
    if(num === (2 ** i) - 1) answer = true
  }
  
  console.log(answer ? "Second" : "First")
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
