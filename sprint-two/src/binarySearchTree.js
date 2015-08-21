var BinarySearchTree = function(value){
  var tree = {};

  tree.value = value;

  tree.left = null;

  tree.right = null;

  tree.contains = function(value) {
    if(tree.value === value) {
      return true;
    } else if (tree.value > value && tree.left !== null) {
      return tree.left.contains(value);
    } else if (tree.right !== null) {
      return tree.right.contains(value);
    }
    return false;
  }

  tree.depthFirstLog = function(func) {
    func(tree.value);

    if (tree.left !== null) {
      tree.left.depthFirstLog(func);
    }

    if (tree.right !== null) {
      tree.right.depthFirstLog(func);
    }
  }

  tree.insert = function(value) {
    if (tree.left === null && tree.value > value) {
      tree.left = BinarySearchTree(value);

      return true;
    } else if(tree.right === null && tree.value < value) {

      tree.right = BinarySearchTree(value);

      return true;
    } else {
      if (tree.value > value) {
        tree.left.insert(value);
      } else {
        tree.right.insert(value);
      }

      return true;
    }

    return false;
  } 

  return tree;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
