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
  
  const visited = {};
  dfs(1,graph,visited);
  
  let answer = true;
  for(let i = 1; i <= n; i++){
    if(visited[i] === undefined) answer = false;
  }
  
  if(answer) console.log("This graph is connected")
  else console.log("This graph is not connected");
}

function dfs(v,graph,visited){
  visited[v] = true; 
  const toVs = graph[v];
  
  for(let i = 0; i < toVs.length; i++){
    const toV = toVs[i]
    if(visited[toV] === undefined) dfs(toV,graph,visited);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
