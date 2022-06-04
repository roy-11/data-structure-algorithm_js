function main(input) {
  let [lengthAndLimit, ...products] = input.split("\n");
  let [length, wlimit] = lengthAndLimit.split(" ");
  [length, wlimit] = [parseInt(length), parseInt(wlimit)];
  
  const valueList = new Array(length + 1).fill("placeholder");
  valueList.forEach((e,i)=>{
    valueList[i] = new Array(wlimit + 1).fill(0);
  })
  
  
  const max = [];
  for(let i = 1; i < valueList.length; i++){
    const [weight,value] = products[i - 1].split(" ").map(e => parseInt(e));
    
    for(let j = 0; j <= wlimit; j++){
      //j<w[i]のとき、方法Bをとる選び方ができない
      if(j < weight) valueList[i][j] = valueList[i-1][j];
      //j>=w[i]のとき、方法A・方法Bどちらも選べる
      if(j >= weight) valueList[i][j] = Math.max(valueList[i-1][j], valueList[i-1][j-weight]+value);
    }
  }
  console.log(valueList[length][wlimit])
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
