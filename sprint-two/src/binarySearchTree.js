var BinarySearchTree = function(value) {
  this.value = value;
  // if value lower than
  this.left = null;
  // if value higher than
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    }
  } else if (this.right) {
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // "definitely a recursive function" - Sam Clay
  callback(this.value);

  if (this.left) {
    this.left.depthFirstLog(callback);
  }

  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 // insert: O(log n): Except absolute worst case structure, you do not need to travel each element to add a new one. Log n assumes the higher the n, the less likely 1 additional n will seriously impact the operation. This holds true to tree logic and statistical coin tosses.right

 // contains: O(log n) ((see above))

 // depthFirstLog: O(n)
 */
