var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.back = 0;
  this.front = 0;
  this.storageSize = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.storageSize++;
  this.back++;
};

Queue.prototype.dequeue = function() {
  if (!this.storageSize) {
    return;
  }

  let data = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.storageSize--;
  return data;
};

Queue.prototype.size = function() {
  return this.storageSize;
}
