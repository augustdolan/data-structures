var Queue = function() {
  // instance of queue itself
  let someInstance = {};
  let back = 0;
  let storageSize = 0;
  let numOfDequeues = 0;
  // Use an object with numeric keys to store values

  // collection of data inside the queue itself
  var storage = {};

  // Implement the methods below

  // push new string to back of the "line"
  someInstance.enqueue = function(value) {
    storage[back] = value;
    storageSize++;
    back++;

  };

  // dequeue pops off the one at the front, and returns it as well
  someInstance.dequeue = function() {
    if (!storageSize) {
      return;
    }
    // take the data from 'front off'
    let data = storage[numOfDequeues];
    delete storage[numOfDequeues];

    storageSize--;
    numOfDequeues++;
    return data;
  };

  // return number of elements (store length property and increase and decrease based on method calls)
  someInstance.size = function() {
    return storageSize;
  };

  return someInstance;
};
