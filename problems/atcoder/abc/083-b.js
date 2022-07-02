function Main(input) {
  const inputs = input.split(" ");
  const n = parseInt(inputs[0],10);
  const a = parseInt(inputs[1],10);
  const b = parseInt(inputs[2],10);
  
  let total = 0;
  for(let i = 1; i <= n; i++){ // N回ループ
    let num = i; // iを操作して値が変わらないようにnum変数を作成（iが変わるとループ回数に影響する）
    let sum = 0;
    while(true){
      if(num < 1) break; // num === 0の方がわかりやすいかも（切り捨ててるから）
      sum = sum + num % 10; // 各桁の合計に１桁目に足す
      num = Math.floor(num / 10); // 桁を右にずらし、切り捨てし整数のみとする
    }
      
    if(sum >= a && sum <= b){
      total = total + i;
    }
  }
  
  console.log(total);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
