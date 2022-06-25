function main(input) {
  let [nm,...pairs] = input.split("\n");
  let [n,m] = nm.split(" ").map(Number)
  
  const graph = [];
  pairs.forEach(pair =>{
    const [a,b] = pair.split(" ").map(Number);
    if(!graph[a]) graph[a] = [];
    if(!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  })
 
  // 本来はリンクリストで実装
  const queue = [];
  queue.push(1);
  const distanceMap = { 1 : 0 };
  
  while (queue.length !== 0) {
    const vertex = queue.shift();
    const toVs = graph[vertex];
    
    for (let i = 0; i < toVs.length; i++) {
      const toV = toVs[i];
      if (distanceMap[toV] === undefined) {
        // vertexはqueueから取り出したものなので、distanceMap[vertex]は必ず記録ずみ
        // つまりたどってきた１つ前のvertexの距離に+1している
        distanceMap[toV] = distanceMap[vertex] + 1;
        queue.push(toV)
      }
    }
  }

  console.log(distanceMap)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 4 4
// 1 2
// 1 3
// 3 4
