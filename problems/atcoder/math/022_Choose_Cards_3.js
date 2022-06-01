function main(input) {
  let [length,cards] = input.split("\n");
  cards = cards.split(" ").map((e)=>parseInt(e));
  
  let costList = new Array(100000).fill(0);
  for(let i = 0; i < cards.length; i++){
    costList[cards[i]]++;
  }
  
  let answer = 0;
  for(let i = 1; i <= 49999; i++){
    answer += costList[i] * costList[100000 - i];
  }
  answer += costList[50000] * (costList[50000] - 1) / 2;
  
  console.log(answer);
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
