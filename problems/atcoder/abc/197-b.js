function main(input) {
   let [HWXY, ...S] = input.trim().split("\n")
   let [H,W,X,Y] = HWXY.split(" ").map(Number);
   S = S.map(e => e.split(""));
   
   let visible = 0;
   
   // スタート地点
   const targetRaw = X - 1;
   const targetCol = Y - 1;
   const startI = X - 1;
   const startJ = Y - 1;
   
   // 右側をカウント（+1でスタート地点は重複しないようカウントしない）
   for(let j = startJ + 1;　j < W; j++){
     if(S[targetRaw][j] === ".") visible++;
     else break;
   }
   
   // 左側をカウント（-1でスタート地点は重複しないようカウントしない）
   for(let j = startJ - 1;　j >= 0; j--){
     if(S[targetRaw][j] === ".") visible++;
     else break;
   }
   
   // 下側をカウント（+1でスタート地点は重複しないようカウントしない）
   for(let i = startI + 1;　i < H; i++){
     if(S[i][targetCol] === ".") visible++;
     else break;
   }
   
   // 上側をウント（-1でスタート地点は重複しないようカウントしない）
   for(let i = startI - 1;　i >= 0; i--){
     if(S[i][targetCol] === ".") visible++;
     else break;
   }
   
   visible++; // スタート地点をカウント
   console.log(visible)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));カ
