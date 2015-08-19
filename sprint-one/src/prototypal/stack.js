var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  size: function() {
    var count = 0;
    for (var key in this.storage) {
      count++;
    }

    return count;
  },

  push: function(value) {
    this.storage[this.size() + 1] = value;
  },

  pop: function() {
    var popped = this.storage[this.size()];

    delete this.storage[this.size()];

    return popped;
  }
};


