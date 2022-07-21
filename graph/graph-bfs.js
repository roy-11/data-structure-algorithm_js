class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    return this;
  }
  addVertexList(array) {
    for (let i = 0; i < array.length; i++) {
      const node = array[i];
      this.addVertex(node);
    }
    return this;
  }
  addEdge(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
      return null;
    }
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    return this;
  }
  addEdgeList(array) {
    for (let i = 0; i < array.length; i++) {
      const edge = array[i];
      this.addEdge(edge[0], edge[1]);
    }
    return this;
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
  // bfs
  getDistanceFrom(node) {
    // 本来はリンクリストで実装
    const queue = [];
    queue.push(node);
    const distanceMap = { [node]: 0 };

    while (queue.length !== 0) {
      const vertex = queue.shift();
      const toVs = this.adjacentList[vertex];

      for (let i = 0; i < toVs.length; i++) {
        const toV = toVs[i];
        if (distanceMap[toV] === undefined) {
          // vertexはqueueから取り出したものなので、distanceMap[vertex]は必ず記録ずみ
          // つまりたどってきた１つ前のvertexの距離に+1している
          distanceMap[toV] = distanceMap[vertex] + 1;
          queue.push(toV);
        }
      }
    }

    console.log(distanceMap);
  }
}

const myGraph = new Graph();
const listVertex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listEdge = [
  ["3", "1"],
  ["3", "4"],
  ["4", "2"],
  ["4", "5"],
  ["1", "2"],
  ["1", "0"],
  ["0", "2"],
  ["6", "5"],
];
myGraph.addVertexList(listVertex);
myGraph.addEdgeList(listEdge);
myGraph.getDistanceFrom(1);
