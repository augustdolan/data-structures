var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    let currentNode = Node(value);
    if (!list.head) {
      list.head = currentNode;
      list.tail = currentNode;
    } else {
      list.tail.next = currentNode; //currentNode is tail
      list.tail = currentNode;
    }

  };

  list.removeHead = function () {
    if (!list.head) {
      return;
    }

    let value = list.head.value;
    list.head = list.head.next;

    return value;
  };

  list.contains = function (target, currentNode) {
    debugger;
    currentNode = currentNode || list.head;
    if (currentNode.value === target) {
      return true;
    }
    if (currentNode.next === null || list.head === null) {
      return false;
    }
    return list.contains(target, currentNode.next);
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



 // -- Its easy to add something in front and in back
 // -- Its easy to remove something from anywhere

 // -- queue is a prime example, because I just don't care about the center very much
 // -- git is another example, its worth seeing the history, but you want to add to the back quickly


