var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[someInstance.size() + 1] = value;
  };

  someInstance.pop = function(){
    var popped = storage[someInstance.size()];

    delete storage[someInstance.size()];

    return popped;
  };

  someInstance.size = function(){
    var count = 0;

     for (var key in storage) {
      count++;
     }

     return count;
  };

  return someInstance;
};
