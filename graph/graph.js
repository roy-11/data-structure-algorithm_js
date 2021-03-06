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

// myGraph.addVertex("0");
// myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addEdge("3", "1");
// myGraph.addEdge("3", "4");
// myGraph.addEdge("4", "2");
// myGraph.addEdge("4", "5");
// myGraph.addEdge("1", "2");
// myGraph.addEdge("1", "0");
// myGraph.addEdge("0", "2");
// myGraph.addEdge("6", "5");

console.log("test");
myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
