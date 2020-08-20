var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};

  someInstance.storage = {};
  someInstance.storageSize = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};

stackMethods.pop = function() {
  if (!this.storageSize) {
    return;
  }
  this.storageSize--;
  let data = this.storage[this.storageSize];
  delete this.storage[this.storageSize];
  return data;
};

stackMethods.size = function() {
  return this.storageSize;
};