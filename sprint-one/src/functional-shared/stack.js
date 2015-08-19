var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance['storage'] = {};
  _.extend(someInstance, stackMethods)
  return someInstance;
};


var stackMethods = {

  size : function() {
    return Object.keys(this.storage).length;
  },
  push : function(value) {
    this.storage[this.size() + 1] = value;
  },
  pop : function() {
    var popped = this.storage[this.size()];
    delete this.storage[this.size()];
    return popped; 
  }


};


