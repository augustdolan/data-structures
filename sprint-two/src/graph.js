// Instantiate a new graph
var Graph = function() {
  // contains a storage, such that it adds nodes
   this.storage = {};
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.storage[node] = [node];
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // iterate over storage array:
  return !!this.storage[node];
};

// Removes a node from the graph.

Graph.prototype.removeNode = function(node) {
  // need to remove edge
  for (let i = 0; i < this.storage[node].length; i++) { // loops through edges of node
    let currentEdge = this.storage[node][i];
    this.removeEdge(currentEdge, node);

    // delete this.storage[edge][node];
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // return !!this.storage[fromNode][];
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[fromNode].push(toNode);
    this.storage[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[fromNode].splice(_.indexOf(this.storage[fromNode], toNode), 1);
  this.storage[toNode].splice(_.indexOf(this.storage[toNode], fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 addNode: O(1)
 contains: O(1)
 removeNode: O(n * n) <== this is due to bad implementation
 hasEdge: O(n)
 addEdge: O(1)
 removeEdge: O(n)
 forEachNode: O(n)
 */



