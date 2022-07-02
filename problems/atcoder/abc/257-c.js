function main(input) {
   let [N,S,W] = input.trim().split("\n");
   N = Number(N);
   W = W.split(" ").map(Number);
   
   const WS = [];
   let answer = 0;
   for(let i = 0; i < N; i++){
     WS.push([W[i],S[i]]);
     // 最初はf(X)のXを一番小さい数とする
     // そのため、大人を全て正しくカウントできることになり
     // 1の数をそのままカウントする
     if(S[i] === "1") answer += 1;
   };
   
   // ソートする
   const sortedWS = WS.sort((a,b)=> a[0]-b[0]);
   
   // Xを１人ずつ大きい数になるよう変えていく
   let count = answer; // 正しくカウントできている数
   for(let i = 0; i < N; i++){
     // Xより小さくなった数が大人だった場合は、
     // 元々正しくカウントしていた大人の数が一つ減ことになる
     // 逆に子供だった場合は、Xより小さくなったことで
     // 正しくカウントできるようになり、一つ増える
     if(sortedWS[i][1] === 1") count--;
     else count++;
     
     // 次の数が同じ数字の場合には、同じ数にもかかわらず
     // count内容に次の数が反映されていないため、最大値は更新しない
     // 同じ数を全て見た後に、今までカウントした結果で更新する(同じ数は一塊とする)
     const nextNum = sortedWS[i + 1] ? sortedWS[i + 1][0] : null;
     if(nextNum　&& sortedWS[i][0] === nextNum)　continue;
     
     // 最大値を更新
     answer = Math.max(answer, count);   
   }
   console.log(answer)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));"
