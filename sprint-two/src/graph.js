// Instantiate a new graph
var Graph = function () {
  // contains a storage, such that it adds nodes
  this.storage = {};
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  // this.storage[node] = [node];
  this.storage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  // iterate over storage array:
  return !!this.storage[node];
};

// Removes a node from the graph.

Graph.prototype.removeNode = function (node) {
  // need to remove edge
  for (let edge in this.storage[node]) {
    delete this.storage[edge][node];
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  // return !!this.storage[fromNode][];
  return !!this.storage[fromNode][toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.storage[fromNode][toNode] = toNode;
  this.storage[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 addNode: O(1)
 contains: O(1)
 removeNode: O(n) <== this is due to bad implementation
 hasEdge: O(n)
 addEdge: O(1)
 removeEdge: O(n)
 forEachNode: O(n)
 */



