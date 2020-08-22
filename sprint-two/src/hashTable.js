

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    this._storage.set(index, [k, v]);
  }
  this._storage.get(index).concat([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get to the index associated with k
  // if (storage[index].length === 2) {
  //   return storage[index][1];
  // iterate over even indices of storage[index]:
  //   if (subIndex === k):
  //     return storage[index][subIndex+1]
  // return value associated with key
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


