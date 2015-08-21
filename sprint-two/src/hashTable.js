var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket === undefined) {
    var tuple = new Tuple(k, v);
    this._storage.set(i, [tuple]);
  } else {
    for(var j = 0; j < bucket.length; j++) {
      var tuple = bucket[j];
      if(tuple.key() === k) {
        bucket.splice(j, 1);
        var tuple = new Tuple(k,v);
        bucket.push(tuple);
        this._storage.set(i,bucket);
        break;
      } else {
        var tuple = new Tuple(k,v);
        bucket.push(tuple);
        this._storage.set(i, bucket);
      }
    }
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for(var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if(tuple.key() === k){
      return tuple.value();
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];

    if (tuple.key() === k) {
      bucket.splice(j, 1)
      this._storage.set(i, bucket);
    }
  }
};

var Tuple = function(k,v) {
  this.storage = [k, v];
};

Tuple.prototype.key = function() {
  return this.storage[0];
};

Tuple.prototype.value = function() {
  return this.storage[1];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
