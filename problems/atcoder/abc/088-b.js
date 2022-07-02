function Main(input) {
  const inputs = input.split("\n");
  const cardLength = inputs[0];
  const cards = inputs[1].split(" ").map(i => parseInt(i,10));
  const sortedCards = cards.sort((a,b)=>{
    return b - a;
  });
  
  let diff = 0;
  for(i = 0; i < sortedCards.length; i++){
    if(i % 2 === 0) diff += sortedCards[i];
    if(i % 2 !== 0) diff -= sortedCards[i];
  };
  
  console.log(diff);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
