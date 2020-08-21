var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // push to the trees children array a new tree with value as parameter to new tree
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // check if value of tree currently in is target
  if (this.value === target) {
    return true;
  }
  // iterate over this.children array
  for (let i = 0; i < this.children.length; i++) {
    // if the child node .contains of target
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  // if none of the above success return false
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
