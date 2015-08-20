var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail === null) {
      list.tail = Node(value);
    } else if (list.head === null) {
      list.head = list.tail;

      var node = Node(value);
      list.head.next = node;

      list.tail = node;
    } else {
      
    }
  };

  list.removeHead = function(){
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */