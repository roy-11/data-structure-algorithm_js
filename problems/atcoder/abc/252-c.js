function main(input) {
   // 数字ごとにどの場所にあるかのリストを作る
   const count = [];
   for(let i = 0; i < 10; i++){
     count[i] = [];
     for(let j = 0; j < 10; j++){
       count[i][j] = 0;
     }
   };
   
   let [reelNum, ...reels] = input.split("\n");
   reelNum = parseInt(reelNum, 10);
   
   for(let i = 0; i < reelNum; i++){
     for(let j = 0; j < 10; j++){
       // 1文字ずつ場所を確認し、その場所をインクリメント
       // checkが数字で、jが場所の位置
       let check = reels[i][j];
       count[check][j]++;
     } 
   }
   
   let answer = 1000;
   // それぞれの数字の値を出す
   for(let i = 0; i < 10; i++){
     let max = 0;
     // 場所の数を見て秒数を計算する
     for(let j = 0; j < 10; j++){
       max = Math.max(max, 10 * (count[i][j] - 1) + j);
     }
     answer = Math.min(answer, max);
   };
   
   consoe.log(answer)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));l
