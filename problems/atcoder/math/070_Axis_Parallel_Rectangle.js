function main(input) {
  const [nk, ...points] = input.split("\n");
  const [n,K] = nk.split(" ").map(Number);

  // 点を使った最小の長方形を求める＝すべての辺上に点が1個以上存在する必要がある
  // 長方形の一辺になりうるxとyのリストを作成（＝全ての点座標・xとyでそれぞれリストにする）
  const x = [];
  const y = [];
  points.forEach(e=>{
    const [xp,yp] = e.split(" ").map(Number);
    x.push(xp);
    y.push(yp);
  })
  
  let min = undefined;
  // xとyで作れる長方形の全パターン（Nは最大50なので可能）
  for(let i = 0; i < n; i++){　// x左端
    for(let j = 0; j < n; j++){　// x右端
      for(let k = 0; k < n; k++){　// y左端
        for(let l = 0; l < n; l++){　// x右端
          // 長方形
          const [xl,xr,yl,yr] = [x[i], x[j], y[k], y[l]];
          
          // 長方形内でK点以上含んでいるか確認
          if(checkNumPoints(xl,xr,yl,yr,n,x,y) >= K){
            
           // x、yが10^9なので掛け合わせると10^18なのでBigIntを使用
            const area = BigInt(Math.abs(xl - xr)) * BigInt(Math.abs(yl - yr));
            if(min === undefined) min = area;
            min = min < area ? min : area;
          }
        }
      }
    }
  }
  
  console.log(min.toString(10));
}

function checkNumPoints(xl,xr,yl,yr,n,x,y){
  let count = 0;
  // x[i]がxとy[i]がyの（x,y）のペアなので、その座標が長方形に入っているか確認
  for(let i = 0; i < n; i++){
    if(xl <= x[i] && x[i] <= xr && yl <= y[i] && y[i] <= yr) count++;
  }
  return count;
}

 
main(require("fs").readFileSync("/dev/stdin", "utf8")); 
