function Main(input) {
  const [n, ...sets] = input.split("\n");
  const t = [0];　// 最初の時間と位置は0なので入れておく
  const x = [0];
  const y = [0];
  
  sets.forEach((set)=>{
    const setArray = set.split(" ");
    t.push(parseInt(setArray[0],10));
    x.push(parseInt(setArray[1],10));
    y.push(parseInt(setArray[2],10));
  });
  
  let can = true;
  let num = parseInt(n,10);
  for (let i = 0; i < num; ++i) {
    let dt = t[i+1] - t[i]; // 時間の差分＝移動できる距離
    let dist = Math.abs(x[i+1] - x[i]) + Math.abs(y[i+1] - y[i]);　// x,y距離の差分の合計
    if (dt < dist) can = false; // 時間の差分は移動できる距離で、それより大きい場合は移動できない
    if (dist % 2 !== dt % 2) can = false; // 偶奇の法則に注目する
  }

  if (can) return console.log("YES");
  return console.log("NO");
}
