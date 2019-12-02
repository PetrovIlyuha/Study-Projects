// *** Graphs use-cases:
// ? Social Networks
// ? Mapping/Location
// ? Routing Algorithms
// ? Visual Hierarchy
// ? File System Optimizations

class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      console.log('There must be a mistake with invalid vertexes names..Please check your input...');
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );
    } else {
      console.log("Check your input. We can't find these graph vertexes...")
    }
  }
  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstSearchRecursive(start) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList; 

    (function dfs(vertex){
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      });
    })(start);

    return results;
  }
  depthFirstIterative(start){
    const stack = [start];
    const results = [];
    const visited = {}
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return results;
  }
  breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => {
      // this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]){
          visited[neighbor] = true;
          // console.log(visited)
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// console.log(graph.depthFirstSearchRecursive('A'));
console.log(graph.depthFirstIterative('A'))
// console.log(graph.adjacencyList)
console.log(graph.breadthFirst('A'));

