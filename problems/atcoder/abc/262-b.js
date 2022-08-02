function main(input) {
  let [nm, ...pairs] = input.split("\n");
  let [n, m] = nm.split(" ").map(Number);

  const graph = [];
  pairs.forEach((pair) => {
    const [a, b] = pair.split(" ").map(Number);
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  });

  let count = 0;
  for (let i = 1; i < graph.length; i++) {
    const firstNode = i;
    const nodes1st = graph[firstNode];
    for (let j = 0; j < nodes1st.length; j++) {
      const secondNode = nodes1st[j];
      const nodes2nd = graph[secondNode];
      if (secondNode > firstNode) {
        for (let k = 0; k < nodes2nd.length; k++) {
          const thirdNode = nodes2nd[k];
          if (thirdNode > secondNode) {
            if (nodes1st.includes(thirdNode)) {
              count++;
            }
          }
        }
      }
    }
  }

  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
