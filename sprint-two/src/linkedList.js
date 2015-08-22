var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail === null) {
      list.tail = list.head = Node(value);
    } else if (list.head === list.tail) {
      var node = Node(value);
      list.head.next = node;

      list.tail = node;
    } else {
      var node = Node(value);

      list.tail.next = node;
      list.tail = node;      
    }
  };

  list.removeHead = function(){
    var old = list.head;
    list.head = list.head.next;

    return old.value;
  };

  list.contains = function(target){
    if (list.head.value === target) {
      return true;
    }

    var found = false, node = list.head.next;
    while (node !== null) {
      if (node.value === target) {
        found = true;
        break;
      }

      node = node.next;
    }

    return found;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    if (list.head === null) {
      list.tail = list.head = Node(value);
    } else {
      var node = Node(value);
      node.next = list.head;

      list.head.previous = node;

      list.head = node;
    }
  };

  list.removeTail = function() {
    var old = list.tail;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return old.value
  };

  list.addToTail = function(value){
    if (list.tail === null) {
      list.tail = list.head = Node(value);
    } else if (list.head === list.tail) {
      var node = Node(value);
      list.head.next = node;

      list.tail = node;
    } else {
      var node = Node(value);

      list.tail.next = node;
      list.tail = node;      
    }
  };

  list.removeHead = function(){
    var old = list.head;
    list.head = list.head.next;

    return old.value;
  };

  list.contains = function(target){
    if (list.head.value === target) {
      return true;
    }

    var found = false, node = list.head.next;
    while (node !== null) {
      if (node.value === target) {
        found = true;
        break;
      }

      node = node.next;
    }

    return found;
  };

  return list;
};
