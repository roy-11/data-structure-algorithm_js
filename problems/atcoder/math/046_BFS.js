function main(input) {
  let [rawcol,start,goal,...pairs] = input.split("\n");
  let [r,c] = rawcol.split(" ").map(Number);
  let [sy,sx] = start.split(" ").map(Number);
  let [gy,gx] = goal.split(" ").map(Number);
  
  // 頂点のハッシュ番号をindexとした隣接リスト
  const graph = [];

  // ハッシュ: y座標 * 列数 * x座標
  // スタート地点とゴール地点
  // -1は配列を0始まりとしているため帳尻合わせ
  const startidx = (sy-1) * c + (sx-1);
  const goalidx = (gy-1) * c + (gx-1);
  
  // 行き止まりかどうかを参照するためのリスト
  const masuType = [];
  for(let i = 0; i < r; i++){
    masuType[i] = [];
    for(let j = 0; j < c; j++){
      // そのまま入れてるがbooleanにしても良いかも
      masuType[i][j] = pairs[i][j];
    } 
  }
  
  for(let i = 0; i < r; i++){
    for(let j = 0; j < c; j++){
      // 座標から頂点番号のハッシュ計算
      const idx1 = i * c + j;
      const idx2 = i * c + (j+1); // 右隣のマス
      const idx3 = (i+1) * c + j; // 上隣のマス 

      // 右隣が行き止まりでない場合はグラフに追加
      // 存在しない+1インデックスの値はundefinedになるため問題なし
      if(masuType[i][j] === "." && masuType[i][j+1] === "."){
        if(!graph[idx1]) graph[idx1] = [];
        if(!graph[idx2]) graph[idx2] = [];
        graph[idx1].push(idx2);
        graph[idx2].push(idx1);
      }
      
      // 上隣が行き止まりでない場合はグラフに追加
      if(masuType[i][j] === "." && masuType[i+1][j] === "."){
        if(!graph[idx1]) graph[idx1] = [];
        if(!graph[idx3]) graph[idx3] = [];
        graph[idx1].push(idx3);
        graph[idx3].push(idx1);
      }
    } 
  }
  
  const queue = [];
  queue.push(startidx);
  const distanceMap = { [startidx]: 0 };
  
  while (queue.length !== 0) {
    const vertex = queue.shift();
    const toVs = graph[vertex];
    
    for (let i = 0; i < toVs.length; i++) {
      const toV = toVs[i];
      if (distanceMap[toV] === undefined) {
        distanceMap[toV] = distanceMap[vertex] + 1;
        queue.push(toV)
      }
    }
  }

  console.log(distanceMap[goalidx]) 
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
 
