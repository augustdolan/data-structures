var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let stackSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {
    if (!stackSize) {
      return;
    }
    stackSize--;
    let data = storage[stackSize];
    delete storage[stackSize];
    return data;
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
