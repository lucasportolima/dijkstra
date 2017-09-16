/**
 * Basic priority queue implementation. If a better priority queue is wanted/needed,
 * this code works with the implementation in google's closure library (https://code.google.com/p/closure-library/).
 * Use goog.require('goog.structs.PriorityQueue'); and new goog.structs.PriorityQueue()
 */
function PriorityQueue () {
  this._nodes = [];

  this.enqueue = function (priority, key) {
    this._nodes.push({key: key, priority: priority });
    this.sort();
  };
  this.dequeue = function () {
    return this._nodes.shift().key;
  };
  this.sort = function () {
    this._nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  };
  this.isEmpty = function () {
    return !this._nodes.length;
  };
}

/**
 * Pathfinding starts here
 */
function Graph(){
  var INFINITY = 1/0;
  this.vertices = {};

  this.addVertex = function(name, edges){
    this.vertices[name] = edges;
  };

  this.shortestPath = function (start, finish) {
    var nodes = new PriorityQueue(),
        distances = {},
        previous = {},
        path = [],
        smallest, vertex, neighbor, alt;

    for(vertex in this.vertices) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      }
      else {
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    while(!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if(smallest === finish) {
        path = [];

        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if(!smallest || distances[smallest] === INFINITY){
        continue;
      }

      for(neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path;
  };
}

//Menor Caminho
var Menor_caminho = new Graph();

Menor_caminho.addVertex('x0y0', {x1y0: 7, x0y1: 8});
Menor_caminho.addVertex('x1y0', {x2y0: 7, x1y1: 8});
Menor_caminho.addVertex('x2y0', {x3y0: 7, x2y1: 8});
Menor_caminho.addVertex('x3y0', {x4y0: 7, x3y1: 8});
Menor_caminho.addVertex('x4y0', {x4y1: 7,});
Menor_caminho.addVertex('x0y1', {x1y1: 7, x0y2: 8});
Menor_caminho.addVertex('x1y1', {x2y1: 7, x1y2: 8});
Menor_caminho.addVertex('x2y1', {x3y1: 7, x2y2: 8});
Menor_caminho.addVertex('x3y1', {x4y1: 7, x3y2: 8});
Menor_caminho.addVertex('x4y1', {x4y2: 7,});
Menor_caminho.addVertex('x0y2', {x1y2: 7, x0y3: 8});
Menor_caminho.addVertex('x1y2', {x2y2: 7, x1y3: 8});
Menor_caminho.addVertex('x2y2', {x3y2: 7, x2y3: 8});
Menor_caminho.addVertex('x3y2', {x4y2: 7, x3y3: 8});
Menor_caminho.addVertex('x4y2', {x4y3: 7});
Menor_caminho.addVertex('x0y3', {x1y3: 7});
Menor_caminho.addVertex('x1y3', {x2y3: 7});
Menor_caminho.addVertex('x2y3', {x3y3: 7});
Menor_caminho.addVertex('x3y3', {x4y3: 7});
Menor_caminho.addVertex('x4y3', {});


// Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(Menor_caminho.shortestPath('x0y0', 'x2y3').concat(['x0y0']).reverse());
