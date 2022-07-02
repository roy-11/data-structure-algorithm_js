const main = input => {
  const inputs = input.split("\n");
  const [N, K] = inputs[0].split(' ').map(Number);
  const A = inputs[1].split(' ').map(Number);
  
  // ソート内容の記録変数
  const ans = Array(N).fill(0);
  
  // Kの数分だけスワップするスタート地点がある
  for (let i = 0; i < K; i++) {
    // スワップ可能なペアのリスト
    let B = [];
    
    // 全ての数をk毎の間隔でBに格納(スワップ可能なペア)
    for (let j = i; j < N; j += K) {
      B.push(A[j]);
    }
    console.log(B)
    
    // それらはソート可能なので昇順でソートする
    B.sort((a, b) => a - b);
    console.log(B)
    
    // ソート後の内容をansに記録する
    // iがスタート地点なので、そのスタート地点にK毎の間隔で配列に代入
    B.forEach((b, index) => ans[index * K + i] = b);
  }
  
  // answerがソートされているかどうかを確認する
  for (let i = 1; i < N; i++) {
    if (ans[i - 1] > an[i]) {
      console.log('No');
      return;
    }
  }
  
  console.log('Yes');
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));s
