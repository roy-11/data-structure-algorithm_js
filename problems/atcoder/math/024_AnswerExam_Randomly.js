function main(input) {
  const inputs = input.split("\n");
  let [length, ...questions] = inputs;
  length = parseInt(length);
  
  let sum = 0;
  for(let i = 0; i < length; i++){
    const [num, point] = questions[i].split(" ");
    sum += parseInt(point) / parseInt(num);
  }
  
  console.log(sum);
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
