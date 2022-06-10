function main(input) {
  const [n,k] = input.split(" ").map(Number);
  
  // 3つの条件に当てはまらない余事象のカウント
  let count = 0;
  
  // 赤色の紙をaとする・赤はnの数探索する
  for (let a = 1; a <= n; a++) {
    
    // 青色の紙をbとする・aが定まるとbの範囲はaを基準に+-k-1の位置になる（条件1の余事象）
    for (let b = a; b <= Math.min(n, a + (2*k)); b++) {
      
      // 白色の紙をcとする・aが定まるとcの範囲はaを基準に+-k-1の位置になる（条件2の余事象）
      for (let c = a; c <= Math.min(n, a + (2*k)); c++) {
        
        // 青色と白色の差はk-1になる（条件3の余事象）
        if(Math.abs(b-c) <= k - 1) count++;      
      }
    }
  }
 
  // 全ての組み合わせから余事象分を引く
  console.log(n ** 3 - count);
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
