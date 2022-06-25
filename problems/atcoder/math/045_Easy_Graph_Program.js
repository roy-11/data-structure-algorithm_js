function main(input) {
  let [nm,...pairs] = input.trim().split("\n");
  let [n,m] = nm.split(" ").map(Number)
  
  const graph = [];
  pairs.forEach(pair =>{
    const [a,b] = pair.split(" ").map(Number);
    if(!graph[a]) graph[a] = [];
    if(!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  })

  let answer = 0;
  for(let i = 1; i < graph.length; i++){
    let lessCount = 0;
    for(let j = 0; j < graph[i].length; j++){
      if(graph[i][j] < i) lessCount++;
    }
    if(lessCount === 1) answer++;
  }
  console.log(answer);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
