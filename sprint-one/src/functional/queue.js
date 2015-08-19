var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count+1] = value;
    count++;
  };

  someInstance.dequeue = function(){
    var dequeued = storage[1];
    for(var key in storage) {
      var previous = storage[key];
      delete storage[key]
      storage[key - 1] = previous;
    }
    count--;
    return dequeued;
  };

  someInstance.size = function(){
    if(count < 0) {
      count = 0;
    }
    return count;
  };

  return someInstance;
};
