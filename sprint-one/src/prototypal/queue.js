var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.back = 0;
  someInstance.front = 0;
  someInstance.storageSize = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back++;
  this.storageSize++;
}

queueMethods.dequeue = function () {
  if (!this.storageSize) {
    return;
  }
  let data = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.storageSize--;
  return data;
}

queueMethods.size = function () {
  return this.storageSize;
}