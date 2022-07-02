function Main(str) {
  const words = ["dream","dreamer","erase","eraser"];
  const reversedWords = words.map(w => w.split("").reverse().join(""))
  const reversedStr = str.split("").reverse().join("");
  
  let canMake = true;
  
  for(let i = 0; i < reversedStr.length; i++){
    let isMadeOf = false;
    for(let j = 0; j < reversedWords.length; j++){
      let checkWord = reversedWords[j];
      let checkWordLength = checkWord.length;
      if(reversedStr.substr(i,checkWordLength) === checkWord){
        console.log(checkWord)
        isMadeOf = true;
        i += checkWordLength;
      }
    }
    
    if(!isMadeOf){
      canMake = false;
      break;
    }
  }
  
  if(canMake) console.log("YES")
  else console.log("NO");
}

Main(require("fs").readileSync("/dev/stdin", "utf8"));F
