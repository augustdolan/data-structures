class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.back = 0;
    this.front = 0;
    this.storageSize = 0;
  }

  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
    this.storageSize++;
  }

  dequeue() {
  if (!this.storageSize) {
    return;
  }

    let data = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    this.storageSize--;
    return data;
  }

  size() {
    return this.storageSize;
  }
}
