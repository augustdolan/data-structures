const Queue = function() {
  let someInstance = {};
  someInstance.storage = {};
  someInstance.storageSize = 0;
  someInstance.back = 0;
  someInstance.firstInLine = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;
};

// methods for Queue object
let queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
  this.storageSize++;
};

queueMethods.dequeue = function() {
  if (!this.storageSize) {
    return;
  }

  let data = this.storage[this.firstInLine];
  delete this.storage[this.firstInLine];
  this.firstInLine++;
  this.storageSize--;
  return data;
};

queueMethods.size = function() {
  return this.storageSize;
};
