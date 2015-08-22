

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this._graph = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  if(!this._graph[node]){
    this._graph[node] = {
      edges: {}
    }
  }
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return !!(this._graph[node]);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  if(this._graph[node]){
    delete this._graph[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this._graph[fromNode] && this._graph[toNode]){
    return !!(this._graph[fromNode].edges[toNode]) || !!(this._graph[toNode].edges[fromNode]);
  }

  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this._graph[fromNode].edges[toNode] = toNode;
  this._graph[toNode].edges[fromNode] = fromNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this._graph[fromNode].edges[toNode]){
    delete this._graph[fromNode].edges[toNode];
  }
  if(this._graph[toNode].edges[fromNode]){
    delete this._graph[toNode].edges[fromNode];
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this._graph){
    cb(key);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */



