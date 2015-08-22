var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.numberOfTuples = 0;
  this.oldLimit = 0;
};

HashTable.prototype.insert = function(k, v){
  console.log(this._limit)
  if(!(this.numberOfTuples - 1 < Math.floor(0.75 * this.oldLimit))) {
    this._checkLimit();
  }

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket === undefined) {
    var tuple = new Tuple(k, v);
    this._storage.set(i, [tuple]);
    this.numberOfTuples++;
  } else {
    for (var j = 0; j < bucket.length; j++) {
      var tuple = bucket[j];
      if (tuple.key() === k) {
        tuple.set(k,v);
        break;
      } else {
        var tuple = new Tuple(k,v);
        bucket.push(tuple);
        this._storage.set(i, bucket);
        this.numberOfTuples++;
        break;
      }
    }
  }

};

HashTable.prototype.retrieve = function(k){
  this._checkLimit();

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket !== undefined) {
    for (var j = 0; j < bucket.length; j++) {
      var tuple = bucket[j];
      if (tuple.key() === k){
        return tuple.value();
      }
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  this._checkLimit();

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];

    if (tuple.key() === k) {
      bucket.splice(j, 1)
      this._storage.set(i, bucket);
      this.numberOfTuples--;
    }
  }
};

HashTable.prototype._checkLimit = function() {
  if (this.numberOfTuples >= Math.floor(this._limit * 0.75)) {
    this._grow();
  } else if (this.numberOfTuples < Math.floor(this._limit * 0.25)) {
    if (this._limit > 8) {
      this._shrink();
    }
  }
};

HashTable.prototype._grow = function() {
  this.oldLimit = this._limit;

  this._limit = this._limit * 2;

  var oldStorage = this._storage;

  this._storage = LimitedArray(this._limit);

  var self = this;
  oldStorage.each(function(bucket) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];

        self.insert(tuple.key(), tuple.value());
      }

      this.oldLimit = this._limit;
    }
  });
};

HashTable.prototype._shrink = function() {
  this.oldLimit = this._limit;

  this._limit = this._limit / 2;

  var oldStorage = this._storage;

  this._storage = LimitedArray(this._limit);

  var self = this;
  oldStorage.each(function(bucket) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];

        self.insert(tuple.key(), tuple.value());
      }

      this.oldLimit = this._limit;
    }
  });
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

Tuple.prototype.set = function(k,v) {
  this.storage[0] = k;
  this.storage[1] = v;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
