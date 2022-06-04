function main(input) {
  const types = parseInt(input);
  
  let answer = 0;
  for(let i = types; i >= 1; i--){
    answer += types / i;
  }
  
  console.log(answer);
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
