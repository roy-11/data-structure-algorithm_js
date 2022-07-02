let count = 0;

function Main(input) {
  const inputs = input.split("\n");
  const length = parseInt(inputs[0],10);
  const numbers = inputs[1].split(" ");
  
  while(true){
    let isEven = 0;
    for(let i = 0; i < length; i++){
      if(parseInt(numbers[i]) % 2 === 0) isEven++;
      numbers[i] = numbers[i] / 2;
    }

    if(isEven === length){
      count++;
    }else{
      console.log(count);
      return;
    }
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
