var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.size = function() {
  var count = 0;
    for (var key in this.storage) {
      count++;
    }

    return count;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];

    delete this.storage[0];

    for (var i = 0;i < this.size(); i++) {
      this.storage[i] = this.storage[i + 1];
    }

    delete this.storage[this.size() - 1];

    return dequeued;
};

